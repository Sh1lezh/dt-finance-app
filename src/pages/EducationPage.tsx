import React from 'react';
import Card from '../component/common/Card';
import { FaVideo, FaBook } from 'react-icons/fa';

// Placeholder component for a resource item
const ResourceItem: React.FC<{ title: string, description: string, type: 'video' | 'book', link: string, image?: string }> =
    ({ title, description, type, link, image }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.02] transition-transform duration-200">
        <Card className="h-full flex flex-col">
             {image ? (
                <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg mb-4"/>
             ) : (
                <div className="w-full h-32 bg-gradient-to-br from-accent/30 to-secondary/30 dark:from-accent/50 dark:to-secondary/50 rounded-t-lg mb-4 flex items-center justify-center">
                    {type === 'video' ? <FaVideo size={30} className="text-secondary opacity-70"/> : <FaBook size={30} className="text-accent opacity-70"/>}
                </div>
             )}
             <h4 className="text-md font-semibold mb-1 text-gray-800 dark:text-white">{title}</h4>
             <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{description}</p>
             <div className="mt-3 text-xs font-medium text-primary dark:text-secondary">
               {type === 'video' ? 'Watch Video' : 'Read More'} &rarr;
             </div>
         </Card>
    </a>
);

const EducationPage: React.FC = () => {
    // --- Placeholder Data ---
    const videos = [
        { id: 'v1', title: 'Budgeting Basics for Beginners', description: 'Learn the fundamentals of creating and sticking to a budget.', link: '#', image: 'https://via.placeholder.com/300x150/92C5FD/FFFFFF?text=Video+Thumbnail' },
        { id: 'v2', title: 'Introduction to Investing', description: 'Understand different investment types and how to start.', link: '#', image: 'https://via.placeholder.com/300x150/6EE7B7/FFFFFF?text=Video+Thumbnail' },
        { id: 'v3', title: 'Managing Debt Effectively', description: 'Strategies to tackle and reduce your debt.', link: '#', image: 'https://via.placeholder.com/300x150/FDE68A/FFFFFF?text=Video+Thumbnail' },
    ];
     const books = [
        { id: 'b1', title: 'The Psychology of Money', description: 'Timeless lessons on wealth, greed, and happiness.', link: '#', image: 'https://via.placeholder.com/300x150/E5E7EB/4B5563?text=Book+Cover' },
        { id: 'b2', title: 'Your Money or Your Life', description: 'Transform your relationship with money and achieve financial independence.', link: '#', image: 'https://via.placeholder.com/300x150/D1D5DB/4B5563?text=Book+Cover' },
        { id: 'b3', title: 'I Will Teach You to Be Rich', description: 'A 6-week program for automating your finances.', link: '#', image: 'https://via.placeholder.com/300x150/9CA3AF/4B5563?text=Book+Cover' },
    ];
    // --- End Placeholder Data ---

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Education Hub</h1>

      {/* Video Resources Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
          <FaVideo className="mr-3 text-secondary"/> Video Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <ResourceItem key={video.id} {...video} type="video" />
          ))}
        </div>
      </section>

      {/* Book Resources Section */}
       <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-700 dark:text-gray-200">
          <FaBook className="mr-3 text-accent"/> Recommended Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map(book => (
            <ResourceItem key={book.id} {...book} type="book" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationPage;