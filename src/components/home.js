import { db } from '../config/firebase-config'
import { useEffect, useState } from 'react'
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import { moviesCollectionName } from '../core/constants/collections.constans'



export const Home = () => {

    const [movieList, setMovieList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    //form
    const [movieTitle, setTitle] = useState([]);
    const [movieDescription, setDescription] = useState([]);
    const [movieDate, setDate] = useState([]);

    const moviesCollectionRef = collection(db, 'movies')


    const getMovies = async () => {
        try {

            const data = await getDocs(moviesCollectionRef)

            const filterData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))

            console.log(filterData);
            console.log(data);

            setMovieList(filterData)

        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {

        getMovies()
    }, [])


    const saveMovie = async () => {
        setIsDisabled(true)

        try {

            await addDoc(moviesCollectionRef, {
                title: movieTitle,
                description: movieDescription,
                date: movieDate
            }).then(() => {
                setIsDisabled(false)
                getMovies()
            })
        } catch (error) {
            console.error(error);
        }
    }

    const deleteMovie = async (id) => {
        const movieDoc = doc(db, 'movies', id)
        await deleteDoc(movieDoc).then(() => {
            getMovies()
        })
    }

    return (

        <div className='container'>

            <h1 className='mt-5'>Welcome</h1>

            <div className='w-50'>
                <div className="form-group mb-2">
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Description' className="form-control" />
                </div>
                <div className="form-group mb-2">
                    <input onChange={(e) => setDate(e.target.value)} type="text" placeholder='Date' className="form-control" />
                </div>

                <button onClick={saveMovie} disabled={isDisabled} className="btn btn-primary w-100">Registrar</button>
            </div>



            <table className="table mt-5">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movieList.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.description}</td>
                                <td>{movie.date}</td>
                                <td>
                                    <button className="btn btn-primary w-100">editar</button>
                                    <button onClick={() => deleteMovie(movie.id)} className="btn btn-danger w-100">eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </div >
    )
}