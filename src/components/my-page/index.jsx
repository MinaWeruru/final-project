import styles from './style.module.css' 

function MyPage () {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
            <div>
                <h3>Hello! My name's Mina. I'm starting to learn JS, and that's my first local website. </h3>
            </div>
                <div>
                    <h4>
                        That's some info about me:
                        I'm 15. I have a lot of hobbies and interests. <br/>They are: dancing, singing, reading books and manga, IT, cooking and of course art.
                    </h4>
                    <h5>

                    </h5>
                </div>
            </div>
        </div>
    )
}

export default MyPage