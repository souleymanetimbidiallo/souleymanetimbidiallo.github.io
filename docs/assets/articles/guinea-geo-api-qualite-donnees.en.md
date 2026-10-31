A record can display a population while leaving an essential question unanswered: which territory does that number describe, and at what date? This is a practical issue in Guinea Geo API, where observations from the 2025 census sit alongside a 2026 administrative update.

The project combines a REST API and an explorer for Guinean subdivisions. To make the data usable, I separated its presence in the database, its provenance and the conditions under which it can be compared. Here is how that distinction appears in the code.

## A browsable database does not guarantee complete coverage

The endpoints let visitors browse regions, prefectures, sub-prefectures, communes and neighborhoods. Coverage differs across these levels. In particular, the project's reference data states that communes outside Conakry and neighborhoods are not covered exhaustively.

A place missing from the results does not necessarily mean that it does not exist. The website identifies partial coverage, and the `/data-sources` endpoint exposes references and limitations for the update.

The same care applies to relationships between subdivisions. Some relationships remain marked `parentStatus: "pending"`. Preserving an old relationship for historical purposes does not confirm it for the current administrative structure.

## A population is a dated observation

The model stores population observations with a year, a source and a geographic reference. The public response includes:

- `populationReferenceYear`: the reference year;
- `populationStatus`: preliminary, final or unavailable;
- `populationSource`: the publication and, when known, report page numbers;
- `populationGeographicReference`: the territory described by the observation;
- `populationBoundaryCompatibility`: verified or not-assessed compatibility with current boundaries.

A 2025 observation can be verified against its source while remaining `not-assessed` for its correspondence with current administrative boundaries. These are two different checks.

The project's RGPH-4 reference dataset is identified as preliminary. Its publication date does not change its reference year: publication in 2026 does not turn a 2025 observation into a 2026 estimate.

## Leaving a value out instead of implying false precision

In `utils/populationResponse.js`, `selectPopulation` selects an observation after validation. Serialization uses that selection:

```javascript
population: observation?.population ?? null,
populationReferenceYear: observation?.year ?? null,
populationStatus: observation?.publicationStatus || 'unavailable',
```

These lines are an excerpt from a response object. If no observation passes the checks, an old number stored in the `population` field is not used as an automatic fallback.

The validator checks the value, year, publication status and source. For the integrated RGPH-4 reference dataset, it also compares the observation with the project's versioned data and the source document's hash. That hash identifies the document used; it does not, by itself, prove that the number is correct.

Another check prevents assigning an observation to an entity created after the observation was collected. Matching names alone cannot establish that two records describe the same territory.

Legacy values remain accessible with `includeHistory=true`, under `populationHistory`. They do not replace the selected population in the main response.

## A total requires more than numeric values

The `getStats` function uses the same selection mechanism as individual records. It then checks that all units have a selected population, that current boundaries are confirmed and that reference years agree:

```javascript
const complete = count > 0 && verified.length === count && matching.length === count && years.length === 1;
```

When those conditions are not met, `totalPopulation` remains `null` for a nonempty set. The `populationCoverage` object explains the situation: verified observation counts, matches to current boundaries and a shared year when one exists.

The national total from the census reference dataset is available separately at `/populations/rgph4-2025`. It is not presented as a validated sum of current administrative units.

## Making limitations visible in the interface

In the explorer's Conakry record, the population year, publication and geographic reference appear together. Current area is shown as unavailable when it has not been verified; a legacy value can be consulted separately.

![Conakry record: reference year, sources and data limitations](/assets/img/projects/api-guinea-geo/conakry-detail.png)

The project's tests also cover several cases that could produce misleading responses: a recent unverified observation, a future year, a value contradicting the reference dataset or a population assigned to the wrong administrative level.

Data quality is visible here in the answers the application declines to provide. A `null` field with context lets developers decide what to display and what to leave out of their calculations.

## Explore the references

- [Administrative update sources and limitations](https://api-guinea-geo.vercel.app/data-sources).
- [The project's RGPH-4 2025 population reference dataset](https://api-guinea-geo.vercel.app/populations/rgph4-2025).
- [Population selection and serialization code](https://github.com/souleymanetimbidiallo/api-guinea-geo/blob/main/utils/populationResponse.js).
- [Statistics calculation rules](https://github.com/souleymanetimbidiallo/api-guinea-geo/blob/main/utils/administrativeStats.js).

[Explore the Guinea Geo API project](/projets/api-guinea-geo).
