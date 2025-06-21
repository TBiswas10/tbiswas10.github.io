import { NextResponse } from "next/server";

// Required for static export
export const dynamic = "force-static";

// Mock database - replace with your actual database
const posts = [
  {
    id: 1,
    slug: "building-modern-web-applications-with-nextjs",
    title: "Building Modern Web Applications with Next.js",
    excerpt:
      "Learn how to create scalable, performant web applications using Next.js 14 and modern React patterns.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js has revolutionized the way we build React applications. With its powerful features like server-side rendering, static site generation, and API routes, it provides developers with everything they need to create modern, performant web applications.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Better SEO and faster initial page loads</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-rendered pages for optimal performance</li>
        <li><strong>API Routes:</strong> Built-in API endpoints for backend functionality</li>
        <li><strong>File-based Routing:</strong> Intuitive routing system</li>
        <li><strong>Image Optimization:</strong> Automatic image optimization and lazy loading</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code></pre>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project structure looks like this:</p>
      <pre><code>my-app/
├── app/
│   ├── components/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── package.json
└── next.config.js</code></pre>
      
      <h2>Key Features</h2>
      <h3>App Router</h3>
      <p>The new App Router in Next.js 13+ provides a more intuitive way to organize your application. It uses file-system based routing and supports React Server Components out of the box.</p>
      
      <h3>Server Components</h3>
      <p>Server Components allow you to write components that run on the server, reducing the JavaScript bundle size sent to the client and improving performance.</p>
      
      <h3>Data Fetching</h3>
      <p>Next.js provides multiple ways to fetch data:</p>
      <ul>
        <li><code>getStaticProps</code> for static generation</li>
        <li><code>getServerSideProps</code> for server-side rendering</li>
        <li>Direct database queries in Server Components</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>When building with Next.js, consider these best practices:</p>
      <ul>
        <li>Use the Image component for optimized images</li>
        <li>Implement proper error boundaries</li>
        <li>Optimize your bundle size</li>
        <li>Use TypeScript for better type safety</li>
        <li>Implement proper SEO meta tags</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js is an excellent choice for building modern web applications. Its combination of performance, developer experience, and powerful features makes it a compelling framework for both small and large projects.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Next.js", "React", "JavaScript"],
  },
  {
    id: 2,
    slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we write, debug, and maintain code.",
    content: "Full content here...",
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "AI & ML",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Machine Learning", "Development"],
  },
  {
    id: 3,
    slug: "mastering-typescript-comprehensive-guide",
    title: "Mastering TypeScript: A Comprehensive Guide",
    excerpt:
      "From basics to advanced patterns, everything you need to know about TypeScript for modern development.",
    content: "Full content here...",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Programming",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 4,
    slug: "design-systems-consistent-user-experiences",
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt:
      "How to build and maintain design systems that scale with your product and team.",
    content: "Full content here...",
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Design",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    tags: ["Design", "UX", "UI"],
  },
  {
    id: 5,
    slug: "performance-optimization-react-apps",
    title: "Performance Optimization Techniques for React Apps",
    excerpt:
      "Learn the best practices for optimizing React applications for speed and user experience.",
    content: "Full content here...",
    author: "Alex Chen",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Web Development",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    id: 6,
    slug: "getting-started-cloud-computing",
    title: "Getting Started with Cloud Computing",
    excerpt:
      "A beginner's guide to understanding and implementing cloud solutions for your projects.",
    content: "Full content here...",
    author: "David Brown",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Cloud",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Cloud", "AWS", "DevOps"],
  },
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const featured = searchParams.get("featured");
    const slug = searchParams.get("slug");

    let filteredPosts = [...posts];

    // Filter by slug (single post)
    if (slug) {
      const post = posts.find((p) => p.slug === slug);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    // Filter by category
    if (category && category !== "All") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === category
      );
    }

    // Filter by search query
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filter by featured
    if (featured === "true") {
      filteredPosts = filteredPosts.filter((post) => post.featured);
    }

    // Add artificial delay to simulate real API
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(filteredPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content || !body.author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new post (in real app, save to database)
    const newPost = {
      id: posts.length + 1,
      slug: body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      title: body.title,
      excerpt: body.excerpt || body.content.substring(0, 150) + "...",
      content: body.content,
      author: body.author,
      date: new Date().toISOString().split("T")[0],
      readTime: `${Math.ceil(body.content.split(" ").length / 200)} min read`,
      category: body.category || "General",
      featured: body.featured || false,
      image:
        body.image ||
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tags: body.tags || [],
    };

    // In a real app, you would save this to your database
    // posts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
