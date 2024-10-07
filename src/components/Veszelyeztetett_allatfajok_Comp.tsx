import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style.css"



export function VeszelyeztetettAllatfajok() {


    const [allatfaj, setAllatfaj] = useState<Allat[]>([])

    interface Allat {
        id: number,
        allatfaj: string,
        elohely: string,
        veszelyeztetesi_fok: string
    }

    interface AllatokTomb {
        allatok: Allat[];
    }


    useEffect(() => {
        async function load() {
            const response = await fetch("/VeszelyeztetettAllatfajok.json");
            const allatfaj: AllatokTomb = await response.json();
            setAllatfaj(allatfaj.allatok)
            console.log(allatfaj.allatok[0])
        }
        load();
    }, [])




    return (


        <>

          

                <div className="table-responsive">

                    <section className="mb-5">

                        <h1>Veszélyeztetett állatfajok</h1>


                        <table className="table table-bordered">

                            <thead className="table-success">

                                <tr>

                                    <th>#</th>
                                    <th>Állatfaj</th>
                                    <th>Élőhely</th>
                                    <th>Veszélyeztetési fok</th>


                                </tr>

                            </thead>




                            <tbody>
                                {
                                    allatfaj.map((allat: Allat) => <tr> <td>{allat.id}</td> <td>{allat.allatfaj}</td>  <td>{allat.elohely}</td>  <td>{allat.veszelyeztetesi_fok}</td> </tr>)
                                }
                            </tbody>





                        </table>







                    </section>




                </div>



  



        </>


    )




}