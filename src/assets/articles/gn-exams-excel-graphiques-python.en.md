Before displaying a chart, you need to read the file correctly. In the CEE version of GN Exams 2026, the first detail to address was in Excel: the first row held the document title, and the second held the column names.

GN Exams brings together several applications for exploring Guinean examination results. This article uses the CEE version to explain the path from a source file to searches, tables and charts. The excerpts come from its `app.py` file; the BEPC and BAC versions have their own structure.

## Reading the right header row

The loader uses Pandas to work through the workbook's sheets. This is the line used inside that loop:

```python
df = pd.read_excel(file_path, sheet_name=sheet_name, header=1, dtype=str)
```

`header=1` tells Pandas that the header is on the second row, since indexing starts at zero. Without it, the document title becomes a column name and the subsequent processing no longer works with the expected structure.

The `dtype=str` argument preserves values as text when reading the file. This is useful for identifiers such as the PV: I do not treat them as quantities to add together.

The processing then removes entirely empty rows and columns, combines the sheets and keeps the sheet name in a `Feuille` column. It also adds a type of education based on the sheet name.

One limitation of this loader deserves attention: when a sheet has at least eight columns, the code keeps the first eight and assigns the expected names. This assumes that their order remains stable. Supporting other formats would call for explicit schema validation.

## Grouping equivalent distinction labels

In a chart, `T.Bien`, `Très Bien` and `tresbien` should not become three different categories. The `normalize_mention` function relies on text normalization: trimming surrounding whitespace, converting to lowercase and removing accents for comparison.

For example, it maps `tbien`, `tresbien` and `t.bien` to `Très Bien`. An empty value becomes `Sans mention`. The original distinction remains available, and the grouped value is added separately:

```python
data["Mention_Normalisée"] = data["Mention"].map(normalize_mention)
```

This separation provides a consistent category for calculations while preserving the value read from the file.

## Preparing data, then reading it again

The CEE version offers a conversion from the processed workbook to Parquet:

```python
df.to_parquet(PARQUET_FILE, index=False, engine="pyarrow")
```

When loading data, the application reads the Parquet file if it exists. Otherwise, it falls back to the Excel workbook. The reading functions also use Streamlit's `st.cache_data`.

This separates workbook preparation from its use in the interface. The tradeoff is that the Parquet file must stay synchronized with the source: replacing Excel without rebuilding the derived file can leave old data on screen. I am not claiming a measured speed improvement here, since I have no comparative benchmark to report.

## Querying the filtered table with DuckDB

The interface filters produce a DataFrame named `filtered`. In the schools tab, this table is registered in an in-memory DuckDB connection:

```python
con = duckdb.connect(database=":memory:")
con.register("filtered_view", filtered)
```

The query then groups rows by school and DPE, counts candidates and totals their distinctions. It excludes empty school names, sorts by row count and keeps the first hundred results.

The table's order therefore has a specific meaning: it highlights the numbers present in the selection. It should not be read as a ranking by pass rate. A table's title and sorting method should make that distinction clear to the reader.

## Turning groups into charts

For the distribution of distinctions, Pandas calculates the counts and Plotly builds the chart:

```python
mention_stats = filtered.groupby("Mention_Normalisée").size().reset_index(name="Nombre").sort_values("Nombre", ascending=False)
st.plotly_chart(px.bar(mention_stats, x="Mention_Normalisée", y="Nombre", text="Nombre"), use_container_width=True)
```

Streamlit brings filters, tables and charts together in one interface. The CEE version also offers school and student profiles, a CSV export of filtered results and a map view.

## Looking behind a result

A count depends on the loaded file and active filters. A pass rate would also require an appropriate denominator: it cannot be inferred from a list of successful candidates alone. Likewise, a distinction-based score expresses a calculation rule; it does not, on its own, summarize a school's quality.

The `header=1` detail illustrates the work behind the interface: a reading decision affects the data structure, then the aggregations, and finally what the visitor sees. That is the path I want to make visible through GN Exams.

[Explore GN Exams and its three demos](/projets/gn-exams-2026).
