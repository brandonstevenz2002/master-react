const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOVdOSs.jpg',
    imageSize: 90,
};

export default function profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'foto de ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}