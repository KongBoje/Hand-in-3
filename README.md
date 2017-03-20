# Hand-in-3, No-SQL

# Explain and Reflect
## Explain, generally, what is meant by a NoSQL database.
NoSQL database, also called Not Only SQL, is an approach to data management and database design that's useful for very large sets of distributed data.

NoSQL, which encompasses a wide range of technologies and architectures, seeks to solve the scalability and big data performance issues that relational databases weren’t designed to address. NoSQL is especially useful when an enterprise needs to access and analyze massive amounts of unstructured data or data that's stored remotely on multiple virtual servers in the cloud.

Companies that use NoSQL include NetFlix, LinkedIn and Twitter.

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

### Pros
- Simplicity of design. (data does not have to be normalized. Just save everything you need, in a document, for a specific domain. Like db or test)
- Some operations are faster in NoSQL. (especially when your data needs are "non-relationel in nature - you typically store and request data from the same domain)
- Simpler "horizontal" scaling to clusters of machines. (Just add another machine to extend storage space. Speed will be almost constant)

### Cons
- NoSQL doesn't use ACID, which stands for Atomicity, Consistency, Isolation and Durability
- it compromises consistency in favor of availability
- No dedicated noSQL-language like SQL and lack of standardized interfaces (it's easier to design an ORM if you have this).
- it lacks huge previous investments in existing relational databases.


## Explain how databases like MongoDB and redis would be classified in the NoSQL world
### MongoDB
Is a document oriented database. Documents are independent units which makes performance better (data is read contiguously off disk) and makes it easier to distribute data across multiple servers while preserving its locality. Application logic is easier to write. No need to translate between objects in your application and SQL queries, you can just turn the object model directly into a document. (sure, but you have ORM with SQL) Unstructured data can be stored easily, since a document contains whatever keys and values the application logic requires.

### redis
Redis is an open source, in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Basically key/value storage. Redis typically holds the whole dataset in memory, and saves to disk every two seconds.

## Explain reasons to add a layer like Mongoose, on top of a schema-less database like MongoDB
The Mongoose layer adds a schema to MongoDB, which makes it much easier to handle the database.

Mongoose is an ORM-like tool for MongoDB. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. Mongoose adds another layer of robustness on top of MongoDB. Write less code, easier to read code (object modeling) and schema validation. MongoDB is schema-less and Mongoose adds schemas. This might seem counterintuitive at first... but Real life data has (often) structure and (often) types.

## Explain, and demonstrate, using relevant examples, the strategy for querying MongoDB (all CRUD operations)


## Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.


## Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere


## Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB


## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
Adding a mongoose layer to the MongoDB adds a schema to your collection, which makes it less messy.
- Real life data (often) has structure
- Real life data (often) has types
- We want to do more with less work
- Basically

## Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes, out of the box:
- Schemas
- built-in type casting
- Validation
- Query building
- Business logic hooks (middleware)

#### Schema example
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
- created isn't needed.
```

```

## Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations


## Explain, using a relevant example, a full MEAN application (the A, can be an ionic application or replaced with an "R", for React) including relevant test cases to test the REST-API (not on the production database)
