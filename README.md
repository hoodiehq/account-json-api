# account-json-api

> RESTful JSON API-blueprint for all things user accounts

[![NPM version](https://badge.fury.io/js/account-json-api.svg)](https://www.npmjs.com/package/account-json-api)
[![Build Status](https://travis-ci.org/hoodiehq/account-json-api.svg?branch=master)](https://travis-ci.org/hoodiehq/account-json-api)

This is a [JSON API v1.0](http://jsonapi.org/format/) compliant specification
for a generic REST API for all things user accounts.

## Summary

```
PUT    /session
GET    /session
DELETE /session
PUT    /session/account
GET    /session/account
PATCH  /session/account
DELETE /session/account
GET    /session/account/profile
PATCH  /session/account/profile

# Password resets, upgrades, etc.
GET    /requests
POST   /requests
GET    /requests/{id}
DELETE /requests/{id}

# Admin only
POST   /accounts
GET    /accounts
GET    /accounts/{id}
PATCH  /accounts/{id}
DELETE /accounts/{id}
GET    /accounts/{id}/profile
PATCH  /accounts/{id}/profile

```

Find the full spec at http://docs.accountjsonapi.apiary.io

## Example

Request

```
PUT /session
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
{
    "data": {
        "type": "session",
        "attributes": {
            "username": "john-doe",
            "password": "secret"
        }
    }
}
```

Response

```
{
    "links": {
        "self": "https://example.com/session"
    },
    "data": {
        "id": "sessionid123",
        "type": "session",
        "relationships": {
            "account": {
                "links": {
                    "related": "https://example.com/session/account"
                },
                "data": {
                    "id": "abc1234",
                    "type": "account"
                }
            }
        }
    },
    "included": [{
        "id": "abc1234",
        "type": "account",
        "attributes": {
            "username": "jane-doe"
        },
        "relationships": {
            "profile": {
                "links": {
                    "related": "https://example.com/session/account/profile"
                },
                "data": {
                    "id": "abc1234-profile",
                    "type": "accountProfile"
                }
            }
        }
    }]
}
```

## Implementations

The `account-json-api` is currently being implemented by [Hoodie](http://hood.ie)
in the [hoodie-server-account](https://github.com/hoodiehq/hoodie-server-account)
module.

## License

MIT
