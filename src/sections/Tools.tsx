import { FC, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { safer } from '@/utils/safer';
const CustomContainer = dynamic(() => import('@/components/ui/Container'));


interface Tool {
  name: string;
  imgSrc: string;
}

interface Category {
  name: string;
  tools: Tool[];
}

interface ToolsSectionProps {
  categoriesItems: Category[];
}

const ToolsSection: FC<ToolsSectionProps> = ({ categoriesItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>('BCE');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false); // State to track if the viewport is mobile
  const { t } = useTranslation('common');

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setShowAll(false);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  useEffect(() => {
    // Update the isMobile state based on the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allCategories = ['BCE', ...categoriesItems.map(category => category.name)];
  const filteredTools = categoriesItems
    .filter(category => activeCategory === 'BCE' || activeCategory === category.name)
    .flatMap(category => category.tools);

  return (
    <div className="pt-36 text-white px-5" id="tools-section">
      <CustomContainer>
        <div className="px-3">
          <h1 className="py-5 text-[34px] max-[700px]:text-center font-bold">{t('tools.title')}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-5 mb-4">
            {allCategories.map((categoryName) => (
              <label
                key={categoryName}
                htmlFor={`category-${categoryName}`}
                className={`flex items-center cursor-pointer py-3 rounded-lg transition`}
              >
                <input
                  type="radio"
                  id={`category-${categoryName}`}
                  name="category"
                  value={categoryName}
                  checked={activeCategory === categoryName}
                  onChange={() => handleCategoryClick(categoryName)}
                  className="customRadio"
                  aria-label={categoryName === 'BCE' ? t('tools.all') : categoryName}
                />
                <span className="ml-2">
                  {categoryName === 'BCE' ? t('tools.all') : categoryName}
                </span>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6">
            {filteredTools.slice(0, showAll || !isMobile ? filteredTools.length : 10).map(tool => (
              <div
                key={tool.name}
                className="flex flex-col items-center border rounded-lg p-4"
              >
                <Image src={tool.imgSrc} alt={tool.name} width={60} height={60} loading="lazy" />
                <span className="mt-2 text-md">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {isMobile && (
            <div className="text-center mt-4">
              {!showAll && filteredTools.length > 10 && (
                <button
                  onClick={handleShowMore}
                  className="bg-[#2f3fe7] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  {t('tools.showMore')}
                </button>
              )}
            </div>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default safer(ToolsSection);
