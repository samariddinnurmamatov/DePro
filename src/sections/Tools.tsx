import { FC, useState } from 'react';
import Image from 'next/image';
import CustomContainer from '@/components/ui/Container';
import { useTranslation } from 'next-i18next';
import { safer } from '@/utils/safer';

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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { t } = useTranslation('common');

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory((prevCategory) =>
      prevCategory === categoryName ? null : categoryName
    );
  };

  return (
    <div className="pt-36 text-white px-5" id="tools-section">
      <CustomContainer>
        <div className="px-3">
          <h1 className="py-5 text-[34px] font-bold">{t('tools.title')}</h1>
          <div className="flex space-x-4 mb-4">
            {categoriesItems.map((category) => (
              <div
                className={`flex items-center cursor-pointer py-2 rounded-lg transition`}
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
              >
                <input
                  type="radio"
                  id={`category-${category.name}`}
                  name="category"
                  value={category.name}
                  checked={activeCategory === category.name}
                  onChange={() => handleCategoryClick(category.name)}
                  className="customRadio"
                />
                <span className="ml-2">{category.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {categoriesItems.map((category) => (
              <div
                key={category.name}
                className={`transition ${
                  activeCategory && activeCategory !== category.name ? 'opacity-50' : ''
                }`}
              >
                <div className="flex justify-between gap-5">
                  {category.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className={`flex flex-col py-4 px-4 w-[150px] gap-3 items-center border rounded-lg `}
                    >
                      <Image src={tool.imgSrc} alt={tool.name} width={20} height={20} />
                      <span className="text-md text-nowrap">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default safer(ToolsSection);
