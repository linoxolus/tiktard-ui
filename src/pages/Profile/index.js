function Profile() {
    return (
        <>
            <h2>
                Profile Page: {new Date().getHours()}:{new Date().getMinutes()}:
                {new Date().getSeconds()}:{new Date().getMilliseconds()}
            </h2>
        </>
    );
}

export default Profile;
