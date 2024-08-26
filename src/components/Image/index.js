import images from '~/assets/images';

function Image({ src = images.noImage, alt, ...props }) {
    return (
        <img
            src={src}
            alt={alt}
            onError={({ currentTarget }) => {
                currentTarget.src = images.noImage;
                currentTarget.onerror = null;
            }}
            {...props}
        />
    );
}

export default Image;
