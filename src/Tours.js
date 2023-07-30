
import Card from "./Card";

function Tours({tours,removeTour}) {
    return (
        <div className='container'>
            <div>
                 <h2 className='title'>Plan With Parth</h2>
            </div>
            
            <div className='cards'>

                
  {/* Building card for every tour , ...tour is to copy/clone the objects of the data  */}
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
            
        </div>
    );
}

export default Tours