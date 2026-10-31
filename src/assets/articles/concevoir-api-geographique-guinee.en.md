A geographic API can seem simple at first: list regions, prefectures and a few relationships between them. In practice, it only becomes useful when the data is easy to understand, test and reuse.

The goal of this project was to build a clear API foundation around Guinea's administrative geography.

## The need

Applications that work with addresses, statistics or location-based services often need a reliable source for administrative divisions.

To be useful, the API had to meet several requirements:

- expose simple endpoints;
- keep the data structure predictable;
- document responses;
- support quick testing;
- remain easy to integrate into a web or mobile application.

## The structure

The key is to model relationships without making the client harder to use.

A region can contain several prefectures. A prefecture can then be associated with communes or other information, depending on the application's needs.

The API therefore needs to avoid two pitfalls:

- returning too little context, forcing the client to make many requests;
- returning too much data, making responses heavy and difficult to maintain.

## The technical choices

I chose a readable REST approach, with understandable routes and stable JSON responses.

Request examples and documentation are part of the product. An undocumented API may work, but it takes more effort to use, test and extend.

## What this project demonstrates

This type of project brings together several important skills:

- API design;
- data structuring;
- technical documentation;
- product thinking for developer tools;
- attention to the experience of the developers who will integrate it.

## What I learned

A good API is more than a collection of routes. It is a clear contract between the data and the applications that consume it.

The more stable, readable and testable that contract is, the easier the API becomes to integrate into real products.
