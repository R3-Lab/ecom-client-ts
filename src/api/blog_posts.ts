"use server";

import { Components } from './openapi';
import { fetcher, getSession } from './index';
import { BlogPost, BlogPostCategory } from './types';

export const getBlogPosts = async () => {
  const { site_id } = await getSession()
  const urlParams = new URLSearchParams();

  if (site_id) {
    urlParams.append('site_id', site_id);
  }

  const {data, error} = await fetcher<BlogPost[]>(`/blog_posts?${urlParams.toString()}`);

  if (error) {
    console.error('Failed to fetch blog posts', error);
    throw new Error(error.message);
  }

  return data!;
}

export const createBlogPost = async (args: Omit<Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsCreateBlogPost, "author_id" | "created_by_id" | "ecommerce_site_id">) => {
  const { site_id, payload } = await getSession()
  if (!payload) {
    throw new Error('Failed to get user payload');
  }
  if (!site_id) {
    throw new Error('Failed to get site id');
  }
  const {id: user_id} = payload;
  const { error} = await fetcher('/blog_posts', {
    method: 'POST',
    body: JSON.stringify({
      ...args,
      author_id: user_id,
      created_by_id: user_id,
      ecommerce_site_id: site_id,
    }),
  });

  if (error) {
    console.error('Failed to create blog post', error);
    throw new Error(error.message);
  }

  // revalidatePath(paths.dashboard.post.root);
}

export const getBlogCategories = async () => {
  const { site_id } = await getSession()
  const urlParams = new URLSearchParams();

  if (site_id) {
    urlParams.append('site_id', site_id);
  }

  const {data, error} = await fetcher<BlogPostCategory[]>(`/blog_posts/category/all?${urlParams.toString()}`);

  if (error) {
    console.error('Failed to fetch blog categories', error);
    throw new Error(error.message);
  }

  return data!;
}

export const createBlogCategory = async (args: Omit<Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsNewBlogCategory, 'ecommerce_site_id'>) => {
  const {site_id} = await getSession();

  if (!site_id) {
    throw new Error('Failed to get site id');
  }

  const { error} = await fetcher('/blog_posts/category', {
    method: 'POST',
    body: JSON.stringify({
      ...args,
      ecommerce_site_id: site_id,
    }),
  });

  if (error) {
    console.error('Failed to create blog category', error);
    throw new Error(error.message);
  }

  // revalidatePath(paths.dashboard.post.categories);
}

export const getBlogCategory = async (id: string) => {
  const {data, error} = await fetcher<BlogPostCategory>(`/blog_posts/category/${id}`);

  if (error) {
    console.error('Failed to fetch blog category', error);
    throw new Error(error.message);
  }

  return data!;
}

export const updateBlogCategory = async (id: string, args: Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogCategory) => {
  const { error} = await fetcher(`/blog_posts/category/${id}`, {
    method: 'PUT',
    body: JSON.stringify(args),
  });

  if (error) {
    console.error('Failed to update blog category', error);
    throw new Error(error.message);
  }

  // revalidatePath(paths.dashboard.post.categories);
}

export const getBlogPost = async (id: string) => {
  const {data, error} = await fetcher<BlogPost>(`/blog_posts/${id}`);

  if (error) {
    console.error('Failed to fetch blog post', error);
    throw new Error(error.message);
  }

  return data!;
}

export const updateBlogPost = async (id: string, args: Components.Schemas.EcommerceBackendSchemaRequestsBlogPostsUpdateBlogPost) => {

  const { error} = await fetcher(`/blog_posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(args),
  });

  if (error) {
    console.error('Failed to update blog post', error);
    throw new Error(error.message);
  }

  // revalidatePath(paths.dashboard.post.root);
}

export const deleteBlogPost = async (id: string) => {
  const { error} = await fetcher(`/blog_posts/${id}`, {
    method: 'DELETE',
  });

  if (error) {
    console.error('Failed to delete blog post', error);
    throw new Error(error.message);
  }

  // revalidatePath(paths.dashboard.post.root);
}
