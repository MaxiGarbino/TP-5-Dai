PGDMP  3    -                |            db-tp5    16.2    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    db-tp5    DATABASE        CREATE DATABASE "db-tp5" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE "db-tp5";
                postgres    false            �          0    16418    event-locations 
   TABLE DATA           �   COPY public."event-locations" (id, name, full_address, max_capacity, latitude, longitude, id_creator_user, id_location) FROM stdin;
    public          postgres    false    220   	       �          0    16458    event_enrollments 
   TABLE DATA           �   COPY public.event_enrollments (id, id_event, id_user, description, registration_date_time, attended, observations, rating) FROM stdin;
    public          postgres    false    228   &       �          0    16451 
   event_tags 
   TABLE DATA           :   COPY public.event_tags (id, id_event, id_tag) FROM stdin;
    public          postgres    false    226   C       �          0    16427    events 
   TABLE DATA           i   COPY public.events (id, name, description, id_event_location, start_date, id_event_category) FROM stdin;
    public          postgres    false    222   `       �          0    16409 	   locations 
   TABLE DATA           O   COPY public.locations (id, name, latitude, longitude, id_province) FROM stdin;
    public          postgres    false    218   }       �          0    16400 
   provincies 
   TABLE DATA           ]   COPY public.provincies (id, name, full_name, latitude, longitude, display_order) FROM stdin;
    public          postgres    false    216   �       �          0    16442    tags 
   TABLE DATA           (   COPY public.tags (id, name) FROM stdin;
    public          postgres    false    224   �       �          0    16467    users 
   TABLE DATA           N   COPY public.users (id, first_name, last_name, username, password) FROM stdin;
    public          postgres    false    230   �                  0    0    event-locations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."event-locations_id_seq"', 1, false);
          public          postgres    false    219                       0    0    event_enrollments_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.event_enrollments_id_seq', 1, false);
          public          postgres    false    227                       0    0    event_tags_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.event_tags_id_seq', 1, false);
          public          postgres    false    225                       0    0    events_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.events_id_seq', 1, false);
          public          postgres    false    221                       0    0    locations_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.locations_id_seq', 1, false);
          public          postgres    false    217                       0    0    provincies_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.provincies_id_seq', 1, false);
          public          postgres    false    215                       0    0    tags_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.tags_id_seq', 1, false);
          public          postgres    false    223            	           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    229            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     