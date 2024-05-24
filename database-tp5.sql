CREATE TABLE public.event_categories (
	id serial4 NOT NULL,
	"name" varchar NULL,
	display_order int4 NULL,
	CONSTRAINT "PK_EventCategories" PRIMARY KEY (id)
);

CREATE TABLE public.event_enrollments (
	id serial4 NOT NULL,
	id_event int4 NOT NULL,
	id_user int4 NOT NULL,
	description varchar NULL,
	registration_date_time timestamp NULL,
	attended bool NULL,
	observations varchar NULL,
	rating int4 NULL,
	CONSTRAINT "PK_EventEnrollments" PRIMARY KEY (id)
);

CREATE TABLE public.event_locations (
	id serial4 NOT NULL,
	id_location int4 NOT NULL,
	"name" varchar NULL,
	full_address varchar NULL,
	max_capacity varchar NOT NULL,
	latitude decimal NULL,
	longitude decimal NULL,
	id_creator_user int4 NOT NULL,
	CONSTRAINT "PK_EventLocations" PRIMARY KEY (id)
);

CREATE TABLE public.event_tags (
	id serial4 NOT NULL,
	id_event int4 NOT NULL,
	id_tag int4 NOT NULL,
	CONSTRAINT "PK_EventTags" PRIMARY KEY (id)
);

CREATE TABLE public.events (
	id serial4 NOT NULL,
	"name" varchar NULL,
	description varchar NULL,
	id_event_category int4 NULL,
	id_event_location int4 NULL,
	start_date timestamp NULL,
	duration_in_minutes int4 NOT NULL,
	price decimal NOT NULL,
	enabled_for_enrollment bool NULL,
	max_assistance int4 NOT NULL,
	id_creator_user int4 NOT NULL,
	CONSTRAINT "PK_Events" PRIMARY KEY (id)
);

CREATE TABLE public.locations (
	id serial4 NOT NULL,
	"name" varchar NULL,
	id_province int4 NOT NULL,
	latitude decimal NULL,
	longitude decimal NULL,
	CONSTRAINT "PK_Locations" PRIMARY KEY (id)
);

CREATE TABLE public.provinces (
	id serial4 NOT NULL,
	"name" varchar NULL,
	full_name varchar NULL,
	latitude decimal NULL,
	longitude decimal NULL,
	display_order int4 NULL,
	CONSTRAINT "PK_Provinces " PRIMARY KEY (id)
);

CREATE TABLE public.tags (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "PK_Tags" PRIMARY KEY (id)
);

CREATE TABLE public.users (
	id serial4 NOT NULL,
	first_name varchar NOT NULL,
	last_name varchar NOT NULL,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "PK_Users" PRIMARY KEY (id)
);

