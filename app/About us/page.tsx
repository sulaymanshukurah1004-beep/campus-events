
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="border-b">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            Campus<span className="text-purple-600">Connect</span>
          </Link>

          <nav className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/events">Explore Events</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about" className="text-purple-600">About Us</Link>
          </nav>

          <Link href="/my-events" className="rounded-lg bg-purple-100 px-5 py-3 text-sm font-bold text-purple-700">
            My Events
          </Link>
        </div>
      </header>

      <section className="bg-purple-50 px-6 py-24 text-center">
        <p className="font-bold uppercase tracking-widest text-purple-600">
          Get to Know Us
        </p>

        <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
          About CampusConnect
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Connecting students to opportunities, experiences and
          unforgettable moments within their campus communities.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-purple-600">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-extrabold">
            Making Campus Life More Connected
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            CampusConnect is a campus event platform designed to help
            students discover activities and programmes happening
            around their university.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From academic conferences and sporting competitions to
            religious gatherings and social events, our goal is to
            make finding campus activities easier.
          </p>
        </div>

        <div className="rounded-3xl bg-purple-100 p-10 text-center">
          <div className="text-7xl">🎓</div>
          <h3 className="mt-6 text-2xl font-extrabold text-purple-800">
            One Campus. Many Experiences.
          </h3>
          <p className="mt-4 leading-7 text-purple-700">
            Discover events, meet people and make every campus
            experience count.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold">
            Our Mission and Vision
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🚀</div>
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 leading-7 text-gray-600">
                To make campus events easier to discover and help
                students participate in meaningful activities.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 leading-7 text-gray-600">
                To build a connected student community where everyone
                can discover opportunities and feel involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold">
          Be Part of the Campus Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Start discovering events and make the most of your campus life.
        </p>

        <Link
          href="/events"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-8 py-4 font-bold text-white hover:bg-purple-700"
        >
          Explore Events →
        </Link>
      </section>

      <footer className="bg-gray-950 px-6 py-10 text-center text-white">
        <h2 className="text-2xl font-bold">
          Campus<span className="text-purple-400">Connect</span>
        </h2>
        <p className="mt-3 text-sm text-gray-400">
          Bringing campus communities together.
        </p>
        <p className="mt-6 text-xs text-gray-500">
          © 2026 CampusConnect. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
