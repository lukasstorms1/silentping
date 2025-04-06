export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-[#f9f5f2] text-[#2e2e2e]">
      <section className="text-center py-20 px-6 bg-[#e2725b] text-white">
        <h1 className="text-5xl font-bold mb-4">SilentPing 🚦</h1>
        <p className="text-xl max-w-2xl mx-auto">
          A calmer way to stay connected with the people that matter — especially for families with sensory needs.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#f9f5f2]">
        <h2 className="text-3xl font-semibold text-[#8a9a5b] mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg">
          SilentPing was built to make communication quieter, faster, and more respectful — especially in homes with ADHD, autism, or high sensory sensitivity. With just one tap, you can nudge someone without the need to shout, knock, or stress them out.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#fff]">
        <h2 className="text-3xl font-semibold text-[#e2725b] mb-4">Why It Matters</h2>
        <p className="max-w-3xl mx-auto text-lg">
          In a world full of noise, SilentPing gives people a way to send a clear, intentional message — like "Dinner's Ready" or "Time to Go" — without disrupting anyone’s peace.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#f4f4f4] text-center">
        <h2 className="text-2xl font-semibold mb-2 text-[#8a9a5b]">Built by Lukas 👨‍🔧</h2>
        <p className="max-w-xl mx-auto text-md mb-6">
          Just a creative soul on a mission to help families communicate better, with love and calm.
        </p>
        <button className="bg-[#8a9a5b] hover:bg-[#7c8b52] text-white font-semibold py-2 px-6 rounded">
          Coming Soon 🚧
        </button>
      </section>

      <footer className="text-center text-sm py-6 bg-[#e2725b] text-white">
        © 2025 SilentPing by Lukas. All rights reserved. This concept and its mission are protected under creative ownership.
      </footer>
    </main>
  );
}
