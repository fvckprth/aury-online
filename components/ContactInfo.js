// components/ContactInfo.js

function ContactInfo() {
    const contactItems = [
        { name: "Threads", url: "https://www.threads.net/@fvckprth" },
        { name: "Instagram", url: "https://www.instagram.com/fvckprth/" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/fvckprth/" },
        { name: "read.cv", url: "https://www.read.cv/fvckprth" },
        { name: "Spotify", url: "https://open.spotify.com/user/parth95" },
    ];

    const otherContactItems = [
        { name: "Email", url: "mailto:ping@parth.ski" },
    ];

    return (
        <div className="flex wrap md:flex-col">
            <div className="mr-10">
                <p className="text-xs sm:text-sm tracking-wide font-light mt-6 md:mt-0">Find me:</p>
                <ul className="list-none pl-5 small-bullet underline underline-offset-4 decoration-from-font">
                    {contactItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm tracking-wide font-light hover:opacity-25">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <p className="text-xs sm:text-sm tracking-wide font-light mt-6 md:mt-12">Reach me:</p>
                <ul className="list-none pl-5 small-bullet underline underline-offset-4 decoration-from-font">
                    {otherContactItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-light text-sm hover:opacity-25">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactInfo;  