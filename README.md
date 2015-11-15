# account-rest-api

> RESTful JSON API-blueprint for all things user accounts

[![NPM version](https://badge.fury.io/js/account-rest-api.svg)](https://www.npmjs.com/package/account-rest-api)
[![Build Status](https://travis-ci.org/hoodiehq/account-rest-api.svg?branch=master)](https://travis-ci.org/hoodiehq/account-rest-api)

This is a [JSON API v1.0](http://jsonapi.org/format/) compliant implementation.

## JSON API

Some key information from the spec;

> ## Content Negotiation
>
> ### Client Responsibilities
>
> Clients **MUST** send all JSON API data in request documents with the header ``Content-Type`: application/vnd.api+json` without any media type parameters.
>
> Clients that include the JSON API media type in their `Accept` header **MUST** specify the media type there at least once without any media type parameters.
>
> Clients **MUST** ignore any parameters for the `application/vnd.api+json` media type received in the `Content-Type` header of response documents.
>
> ### Server Responsibilities
>
> Servers **MUST** send all JSON API data in response documents with the header `Content-Type: application/vnd.api+json` without any media type parameters.
>
> Servers **MUST** respond with a 415 Unsupported Media Type status code if a request specifies the header `Content-Type: application/vnd.api+json` with any media type parameters.
>
> Servers **MUST** respond with a 406 Not Acceptable status code if a request's Accept header contains the JSON API media type and all instances of that media type are modified with media type parameters.
>
> ## Document Structure
> ### Top Level
>
> A JSON object **MUST** be at the root of every JSON API request and response containing data. This object defines a document's "top level".

> A document **MUST** contain at least one of the following top-level members:

>   - data: the document's "primary data"
>   - errors: an array of error objects
>   - meta: a meta object that contains non-standard meta-information.
>
> The members data and errors **MUST NOT** coexist in the same document.
>
> A document **MAY** contain any of these top-level members:
>
>   - jsonapi: an object describing the server's implementation
>   - links: a links object related to the primary data.
>   - included: an array of resource objects that are related to the primary data and/or each other ("included resources").
>
> If a document does not contain a top-level data key, the included member **MUST NOT** be present either.


And from the [FAQ](http://jsonapi.org/faq/);

> ## Where's PUT?

> Using PUT to partially update a resource (i.e. to change only some of its state) is not allowed by the HTTP specification. Instead, PUT is supposed to completely replace the state of a resource:

> > “The PUT method requests that the state of the target resource be created or replaced with the state…in the request message payload. A successful PUT of a given representation would suggest that a subsequent GET on that same target resource will result in an equivalent representation being sent…”

> The correct method for partial updates, therefore, is PATCH, which is what JSON API uses. And because PATCH can also be used compliantly for full resource replacement, JSON API hasn't needed to define any behavior for PUT so far. However, it may define PUT semantics in the future.

> In the past, many APIs used PUT for partial updates because PATCH wasn’t yet well-supported. However, almost all clients now support PATCH, and those that don’t can be [easily worked around](http://jsonapi.org/recommendations/#patchless-clients).

See documentation on
http://docs.accountrestapi.apiary.io/

Send your suggestion to the [apiary.apib](apiary.apib) file

## License

MIT
