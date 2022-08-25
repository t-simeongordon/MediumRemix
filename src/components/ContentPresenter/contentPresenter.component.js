import CategoryItem from '../CategoryItem/categoryItem.component'

import './contentPresenter.styles.scss';

const ContentPresenter = ({ categories }) => {
  return (
    <div className='content-presenter-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default ContentPresenter;
