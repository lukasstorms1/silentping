export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-purple-100 p-8 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-700 drop-shadow-sm">
          SilentPing <span className="text-4xl">🚀</span>
        </h1>
        <p className="text-xl mb-4">
          A calmer way to stay connected with the people that matter — without shouting or knocking.
        </p>
        <p className="text-md text-gray-500 italic">
          Built by Lukas 💡 for families, friends, and neurodivergent champions 💜
        </p>
        <div className="mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}
