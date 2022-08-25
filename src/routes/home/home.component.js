import { Outlet } from 'react-router-dom';
import ContentPresenter from '../../components/ContentPresenter/contentPresenter.component';
const Home = () => {
    const categories = [
        {
          id: 1,
          title: 'Teams',
          imageUrl: 'https://shrm-res.cloudinary.com/image/upload/c_crop,h_705,w_1254,x_0,y_50/w_auto:100,w_1200,q_35,f_auto/v1/Tools%20and%20Samples/iStock-117148963_obuso7.jpg',
        },
        {
          id: 2,
          title: 'Content',
          imageUrl: 'https://www.business2community.com/wp-content/uploads/2019/08/38689515_l-1.jpg',
        },
        {
          id: 3,
          title: 'Onboarding',
          imageUrl: 'https://resources.workable.com/wp-content/uploads/2019/02/onboarding-featured.jpg',
        },
      ];
    return (
        <>
            <ContentPresenter categories={categories}/>
            <Outlet />
        </>
    )
}

export default Home