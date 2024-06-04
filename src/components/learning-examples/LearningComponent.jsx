import FirstComponent from './FirstComponent'
import { FourthComponent } from './FirstComponent'
import LearningJavaScript from './LearningJavaScript';
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

export default function LearningComponent() {
    return (
      <div className="App">
       My To Do Application
       <FirstComponent />
       <SecondComponent />
       <ThirdComponent />
       <FourthComponent />
       <LearningJavaScript />
      </div>
    );
}