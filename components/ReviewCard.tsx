'use client'

interface ReviewCardProps {
  name: string
  rating: number
  comment: string
  date?: string
  image?: string
}

export default function ReviewCard({ name, rating, comment, date, image }: ReviewCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Comment */}
      <p className="text-dark/80 mb-6 leading-relaxed italic text-lg">
        "{comment}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-dark">{name}</p>
          {date && (
            <p className="text-sm text-dark/60">{date}</p>
          )}
        </div>
      </div>
    </div>
  )
}

