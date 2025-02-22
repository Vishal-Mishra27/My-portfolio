const posts = [
  {
    id: 1,
    title: "Bachelor of Technology",
    href: "#",
    description:
      "I am a B.Tech graduate from Dr. A.P.J. Abdul Kalam Technical University (AKTU). With a solid foundation in engineering principles, he has honed his skills in programming and problem-solving. ",
    date: "June 30, 2025",
    datetime: "2020-03-16",
    category: { title: "Graduation", href: "#" },
    author: {
      name: "Dr. A.P.J Abdul Kalam Technical University",
      role: "Study",
      href: "#",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png",
    },
  },
  {
    id: 2,
    title: "Intermediate",
    href: "#",
    description:
      "I was completed his intermediate education from the Uttar Pradesh Board, where he developed a strong academic foundation in subjects like science and mathematics. ",
    date: "July 31, 2021",
    datetime: "2020-03-16",
    category: { title: "Intermediate", href: "#" },
    author: {
      name: "UP Board",
      role: "Study",
      href: "#",
      imageUrl:
        "https://i.pinimg.com/474x/99/7b/0b/997b0b3aa2c770020f261916114c7097.jpg",
    },
  },
  {
    id: 3,
    title: "High School",
    href: "#",
    description:
      "I was completed his high school education from the Uttar Pradesh Board, where he excelled in academics and participated in various extracurricular activities.",
    date: "Apr 27, 2019",
    datetime: "2020-03-16",
    category: { title: "High School", href: "#" },
    author: {
      name: "UP Board",
      role: "Study",
      href: "#",
      imageUrl:
        "https://i.pinimg.com/474x/99/7b/0b/997b0b3aa2c770020f261916114c7097.jpg",
    },
  },
];

export default function Resume() {
  return (
    <div className="bg-white py-24 sm:py-32" id="education">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Education
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-pretty font-semibold tracking-tight text-gray-900 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
