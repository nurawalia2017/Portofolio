import { pgTable, serial, text, boolean, integer, timestamp, json } from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  bio: text('bio').notNull(),
  avatarUrl: text('avatar_url'),
  email: text('email').notNull(),
  location: text('location'),
  githubUrl: text('github_url'),
  linkedinUrl: text('linkedin_url'),
  twitterUrl: text('twitter_url'),
  resumeUrl: text('resume_url'),
  statusAvailable: boolean('status_available').default(true),
  updatedAt: timestamp('updated_at').defaultNow()
});

export const skills = pgTable('skills', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(), // Frontend, Backend, Database, Tools
  proficiency: integer('proficiency').default(85),
  icon: text('icon'),
  orderIndex: integer('order_index').default(0)
});

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description').notNull(),
  longDescription: text('long_description'),
  category: text('category').notNull(), // Fullstack, Frontend, Backend, Mobile
  imageUrl: text('image_url'),
  demoUrl: text('demo_url'),
  githubUrl: text('github_url'),
  tags: json('tags').$type<string[]>().default([]),
  featured: boolean('featured').default(false),
  orderIndex: integer('order_index').default(0),
  createdAt: timestamp('created_at').defaultNow()
});

export const experiences = pgTable('experiences', {
  id: serial('id').primaryKey(),
  role: text('role').notNull(),
  company: text('company').notNull(),
  location: text('location'),
  period: text('period').notNull(),
  type: text('type').notNull(), // work | education
  description: text('description').notNull(),
  skillsUsed: json('skills_used').$type<string[]>().default([]),
  orderIndex: integer('order_index').default(0)
});

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  subject: text('subject'),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false),
  createdAt: timestamp('created_at').defaultNow()
});

