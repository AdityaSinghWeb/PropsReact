import { CoreConceptData } from '../data';
import CoreConcept from './CoreConcept';

function CoreData() {
  return (
    <section id="core-concepts">
          <ul>
           {CoreConceptData.map((el)=>{
           return <CoreConcept key={el.title} {...el}/>
           })}
          </ul>
        </section>
  )
}

export default CoreData
