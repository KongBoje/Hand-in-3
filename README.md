# Hand-in-3, No-SQL

# Explain and Reflect
## Explain, generally, what is meant by a NoSQL database.
NoSQL database, also called Not Only SQL, is an approach to data management and database design that's useful for very large sets of distributed data.

NoSQL, which encompasses a wide range of technologies and architectures, seeks to solve the scalability and big data performance issues that relational databases weren’t designed to address. NoSQL is especially useful when an enterprise needs to access and analyze massive amounts of unstructured data or data that's stored remotely on multiple virtual servers in the cloud.

Companies that use NoSQL include NetFlix, LinkedIn and Twitter.

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

### Pros


### Cons
- NoSQL doesn't use ACID, which stands for Atomicity, Consistency, Isolation and Durability


## Explain how databases like MongoDB and redis would be classified in the NoSQL world


## Explain reasons to add a layer like Mongoose, on top of a schema-less database like MongoDB
The Mongoose layer adds a schema to MongoDB, which makes it much easier to handle the database.

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
