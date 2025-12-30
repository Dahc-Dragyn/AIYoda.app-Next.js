import {
    Book, Terminal, Feather, Sword, Heart,
    Newspaper, Baby, Image as ImageIcon,
    Gamepad2
} from 'lucide-react'
import { NextBuildContext } from 'next/dist/build/build-context'

export const appsData = [
    // --- OFFLINE APPS ---
    {
        slug: "bookfinder",
        title: "BookFinder",
        desc: "Federated Search Intelligence Book SearchEngine.",
        longDesc: "A high-performance, heuristic-driven data orchestration engine designed to aggregate and normalize bibliographic intelligence from global sources, including Google Books, Open Library, and the Library of Congress. The system utilizes a sophisticated 'Hybrid Search' architecture that concurrently queries multiple upstream providers, applying custom 'Literalist Query Injection' and 'Title Boosting' algorithms to ensure high-accuracy results even for obscure titles. It features an integrated 'Bot Bouncer' security layer for proactive crawler mitigation, tiered rate limiting for infrastructure stability, and an automated tagging engine that infers genre and series metadata using deep linguistic signals.",
        techStack: ["FastAPI", "httpx", "Redis", "Docker", "Gunicorn", "Next.js 15", "Cloud Run"],
        url: "https://bookfinder.aiyoda.app",
        icon: Book,
        status: "offline",
        note: "Restarts Jan 1st"
    },
    {
        slug: "promptforge",
        title: "PromptForge",
        desc: "Professional Prompt Engineering Platform",
        longDesc: "A production-grade LLM orchestration and governance platform engineered for advanced prompt development and secure model deployment. The system features a dual-engine architecture with seamless Google Gemini and OpenAI integration, supported by a scalable Firestore-backed versioning and rating system. Security is prioritized through an automated 'Anonymous Leak' detection service that proactively redacts PII, alongside an isolated execution environment for AI-generated code. The platform includes a comprehensive benchmarking suite for side-by-side performance analysis across multiple models and a dynamic APE (Automatic Prompt Engineer) optimization engine to quantitatively improve prompt effectiveness.",
        techStack: ["FastAPI", "Gemini 2.5 Flash-lite", "Firestore", "Google Generative AI SDK", "OpenAI SDK", "Cryptography (Fernet)", "Docker", "Pydantic", "Next.js 15", "Cloud Run"],
        url: "https://promptforge.aiyoda.app",
        icon: Terminal,
        status: "offline",
        note: "Restarts Jan 1st"
    },
    {
        slug: "digital-quill",
        title: "Digital Quill",
        desc: "Llama 3b model trained on Jane Austen.",
        longDesc: "A dedicated inference API running a quantized (q4_k_m) TinyLlama model fine-tuned on the works of Jane Austen. The service uses `llama.cpp` bindings for CPU-optimized inference within a Docker container. It features a custom 'Few-Shot' prompting engine to strictly enforce Victorian prose style and a post-processing layer to clean up hallucinated sentence fragments.",
        techStack: ["FastAPI", "Llama.cpp", "TinyLlama", "Quantization (GGUF)", "Docker", "Cloud Run"],
        url: "https://idx-janeausten-36778589-140939405627.us-east1.run.app",
        icon: Feather,
        status: "offline",
        note: "Restarts Jan 1st"
    },
    {
        slug: "dnd-knowledge",
        title: "D&D Knowledge",
        desc: "5e Ruleset RAG Agent",
        longDesc: "A Retrieval-Augmented Generation (RAG) agent capable of answering complex D&D 5e rule questions. It utilizes Meta's FAISS for vector similarity search and Sentence-Transformers to create semantic embeddings of rulebooks. The system retrieves precise context before querying the LLM, ensuring answers are grounded in official rules rather than hallucinations.",
        techStack: ["FastAPI", "LangChain", "FAISS", "RAG", "Sentence-Transformers", "Docker", "Streamlit", "Cloud Run"],
        url: "https://dndstreamlit-140939405627.us-west1.run.app",
        icon: Sword,
        status: "offline",
        note: "Restarts Jan 1st"
    },

    // --- LIVE APPS ---
    {
        slug: "life-coach",
        title: "Life Coach",
        desc: "Context-Aware Personal Growth Engine",
        longDesc: "A persona-driven coaching ecosystem built on Google Gemini 2.5 Flash-Lite. It maintains long-term conversational state using LangChain memory primitives and utilizes a custom RAG layer to access specific coaching methodologies. The architecture supports 'hot-swapping' expert personas (e.g., Career Catalyst vs. Empathetic Listener) via system prompt injection.",
        techStack: ["Google Gemini 2.5 Flash-Lite", "LangChain", "RAG", "Flask", "FAISS", "Docker", "Cloud Run"],
        url: "https://life-coach-service-140939405627.us-west1.run.app",
        icon: Heart,
        status: "live",
        warning: "Cold Boot: ~1 min"
    },
    {
        slug: "rock-lizard-spock",
        title: "Rock Lizard Spock",
        desc: "The Classic Game + Chat",
        longDesc: "A Flask-based implementation of the extended Rock-Paper-Scissors-Lizard-Spock game. It features a RESTful API for game logic state management and a lightweight chat interface. The system uses a modular 'Service-Route-Model' architecture to separate game rules from HTTP handling, ensuring testability and clean code structure.",
        techStack: ["Flask", "Python", "Jinja2", "CSS3", "Docker", "Cloud Run"],
        url: "https://idx-rock-lizard-spock-97564177-140939405627.us-west1.run.app",
        icon: Gamepad2,
        status: "live"
    },
    {
        slug: "explain-like-im-5",
        title: "Explain Like I'm 5",
        desc: "Complex topics simplified",
        longDesc: "An educational tool utilizing Chain-of-Thought prompting to decompose complex inputs. It uses an OpenAI backend to perform recursive simplification: first breaking a concept into component parts, then generating analogies suitable for a 5-year-old's cognitive level.",
        techStack: ["OpenAI API", "Streamlit", "Prompt Engineering", "Docker", "Cloud Run"],
        url: "https://tell-me-like-a-5yo-140939405627.us-east1.run.app",
        icon: Baby,
        status: "live"
    },
    {
        slug: "warnews-rss",
        title: "WarNews RSS",
        desc: "High-Concurrency Intelligence Platform",
        longDesc: "A specialized Open-Source Intelligence (OSINT) platform designed for high-throughput news ingestion and real-time conflict tracking. The system utilizes an asynchronous 'Fan-Out' architecture—powered by aiohttp—to concurrently fetch and normalize dozens of global RSS feeds, bypassing traditional sequential processing bottlenecks. It features a multi-layered filtering engine that combines regional heuristics with a customizable keyword taxonomy to distill high-signal intelligence from noisy data streams. The platform includes sophisticated content hygiene logic to sanitize complex HTML and social media summaries, alongside a server-side caching layer that delivers optimized, sub-millisecond response times for global users.",
        techStack: ["Flask", "aiohttp & asyncio", "Feedparser", "BeautifulSoup", "Redis/Caching", "Docker", "Cloud Run"],
        url: "https://idx-russian-news-rss-4685253-140939405627.us-east1.run.app",
        icon: Newspaper,
        status: "live"
    },
    {
        slug: "perfect-boyfriend",
        title: "Perfect AI Boyfriend",
        desc: "Romantic Chat Simulator",
        longDesc: "A personality-driven chat simulation that uses a persistent context window to remember user details (names, preferences). It utilizes a 'Character Card' prompting strategy to enforce consistent personality traits (supportive, romantic, engaging) across long conversation sessions.",
        techStack: ["Flask", "Vercel AI SDK", "OpenAI", "Docker", "Cloud Run"],
        url: "https://idx-perfect-boyfriend-7638571-z3iigmilpq-uw.a.run.app/",
        icon: Heart,
        status: "live"
    },
    {
        slug: "scene-generator",
        title: "Scene Generator",
        desc: "Multi-Model Creative Pipeline",
        longDesc: "A two-stage generative pipeline. First, Google Gemini acts as a 'Creative Director,' parsing raw book text to extract visual elements (lighting, mood, composition). Second, these structured details are fed into DALL-E 3 to render high-fidelity concept art. The system uses FastAPI to handle the asynchronous handoff between the two AI models.",
        techStack: ["FastAPI", "Flask", "Google Gemini", "DALL-E 3", "AsyncIO", "Docker", "Cloud Run"],
        url: "https://book-scene-service-140939405627.us-west1.run.app",
        icon: ImageIcon,
        status: "live"
    },
    {
        slug: "turtle-race",
        title: "Turtle Race",
        desc: "Bet on your favorite turtle",
        longDesc: "A client-side simulation utilizing the Canvas API for rendering. It implements a weighted-randomness algorithm to determine movement speed, creating unpredictable race outcomes. (Legacy project maintained for historical sentiment).",
        techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Docker", "Cloud Run"],
        url: "https://turtle-service-140939405627.us-central1.run.app",
        icon: Gamepad2,
        status: "live"
    }
]