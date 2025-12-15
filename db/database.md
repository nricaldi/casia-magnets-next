

# extends supabase auth.users
user_profile
---
- id
- first_name
- last_name
- created_at


products
---
- id
- name
- description
- price_cents
- active
- created_at
- updated_at


design_assets
---
- id
- user_id
- name
- description
- storage_url
- created_at
- archived_at


orders
---
- id
- user_id
- email
- note


# pricing
- subtotal_cents
- tax_cents
- shipping_cents
- total_cents

# stripe integration - fill out after testing
- stripe_*

# shipping information
- shippping_name
- shippping_address_1
- shippping_address_2
- shippping_city
- shippping_state
- shippping_postal_code
- shippping_country

- status
- created_at
- updated_at


order_items
---
- id
- product_id
- order_id
- design_asset_id
- quantity
- unit_price_cents


shipments
---
- id
- order_id

# shippo integrations - fill out after testing
- shippo_*

- carrier
- service_level
- tracking_number
- tracking_url
- label_url

- status
- shipped_at
- delivered_at

- created_at
- updated_at
