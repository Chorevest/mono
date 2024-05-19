# backend

Repo for all things backend.

# Local Testing

## Spinning up the backend

1. Spin up the containers using `make start`.
2. You should see some messages from `backend-database` that ultimately says "database system is ready to accept connections". The infra is ready to accept requests when you see the following message from fiber:
```
  ┌───────────────────────────────────────────────────┐ 
  │                   Fiber v2.49.2                   │ 
  │               http://127.0.0.1:8080               │ 
  │       (bound on host 0.0.0.0 and port 8080)       │ 
  │                                                   │ 
  │ Handlers ............. 3  Processes ........... 1 │ 
  │ Prefork ....... Disabled  PID ................. 1 │ 
  └───────────────────────────────────────────────────┘ 
```
3. Now, you can open a new terminal and start sending requests such as:

    `curl -X POST http://localhost:8080/api/v1/chores -H 'Content-Type: application/json' -d '{"parent_id": "abc", "child_id": "def", "task": "take out trash"}'`

    (See **Endpoints** section below for more details )

## Connecting to PgAdmin
PgAdmin is a great tool to be able to query from your local Postgres database. To connect:
1. Go to `localhost:80` in your web browser.
2. For login, enter `admin@admin.com` and `password` for username and password, respectively. (If you forget these, you can always refer to the `docker-compose.yml` file and find them in the `pgadmin` section.)
3. Once in, click on `Local` just under `Object Explorer` in the top left.
4. Enter `password` as the password when prompted.
5. Now, you should see your new connection in the `Object Explorer` panel on the left. Click on the dropdown arrow. Drill down into `Databases` -> `backend` -> `Schemas` -> `public` -> `Tables`, and you should see all available tables.
6. Finally, to query these tables, next to the `Object Explorer` text in the top left, click on the `Query Tool` button to open a query editor. (Optionally if you cannot find it, you can use the keyboard shortcut `Option + Shift + Q`)
7. Query away, young padawan...

# Endpoints

## Chores

### `POST api/v1/chores`

Saves a chore to the `chores` table.

#### Parameters
- `parent_id` [Required]
    - Parent creating the chore.
- `task` [Required]
    - Raw text of chore.
- `child_id` [Optional]
    - Child chore is assigned to. Optional because it can be assigned at a later point.
- `payout` [Optional]
    - Payout (USD in cents) of chore. Optional because it can be set at a later point.

Example call:
```
curl -X POST http://localhost:8080/api/v1/chores \
    -H 'Content-Type: application/json' \
    -d '{"parent_id": "parent_1", "child_id": "child_1", "task": "take out trash"}
```

Example returns:
```
{"error" : ""}
{"error":"child_id is required"}
```
