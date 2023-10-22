import { useEffect, useState } from 'react'
import styles from './style.module.css'

function ApiTest () {
  const [teamData, setTeamData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = 'https://free-nba.p.rapidapi.com/teams'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '462e2d5395msh917f86ed6ddbfbbp13eee6jsn0d58e1d1549f',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      },}

      fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
      console.log(response);
      setLoading(false)
      setTeamData(response.data);
    });
}, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.teams}>Teams</h1>
            <div>
                {loading && (
                    <div>Data loading...</div>
                )}
                {teamData.map((el, i) => {
                    return(
                        <div key={el.id}>
                            {i+1}. {el.abbreviation} {el.city}
                            <button className={styles.btn} onClick={() => {
                                setTeamData(teamData.filter((filterElement) => el.id !== filterElement.id))
                            }}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ApiTest