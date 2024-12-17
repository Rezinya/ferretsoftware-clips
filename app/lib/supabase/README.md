# Supabase Functions

Snippets used in Supabase.

## Generated Column

Creates a generated column to utilize full text search (more details in Supabase's [docs](https://supabase.com/docs/guides/database/full-text-search#searchable-columns))

```sql
alter table clips
add column textsearchable_col tsvector
generated always as (
  to_tsvector('english', coalesce(title,'')) ||
  to_tsvector('english', coalesce(array_to_string_immutable(tags, ' '),'')) ||
) stored;
```

You can then search your database using

```sql
select *
from clips
where
  textsearchable_col @@ to_tsquery('word')
order by view_count desc
limit 20
```

### Array to String Immutable

The default `array_to_string` function is stable; this wraps it as immutable to be used above

```sql
create or replace function array_to_string_immutable (
  arg text[], 
  separator text default ' ',
  null_string text default null) 
returns text immutable language sql as $$
  select array_to_string(arg,separator,null_string)
$$;
```

## Custom RPC (Remote Procedure Call) Search Function

Query function that performs a full text search on `textsearchable_col` as well as searches the `creator_name` column. `creator_name` was not added to `textsearchable_col` because splitting names into tokens might add irrelevant results when searching for specific ferrets. 

```sql
create or replace function clips_search(query text) returns setof clips as $$
  select *
  from clips
  where
    textsearchable_col @@ websearch_to_tsquery('english', query)
    or creator_name ~~* query
$$ language sql
```