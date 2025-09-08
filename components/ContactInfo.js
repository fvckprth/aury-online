// components/ContactInfo.js

function ContactInfo() {
    const contactItems = [
        { name: "Instagram", url: "https://www.instagram.com/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/aury-hernandez-442a4727a/" },
        {
            name: "Resume",
            url:
                "mailto:aury@seeyoutomorrow.us?subject=Request%20for%20Resume&body=Hi%20Aury,%0A%0AI%20hope%20you%27re%20well.%20I%27d%20like%20to%20request%20a%20copy%20of%20your%20resume%20for%20review.%20If%20there%27s%20a%20preferred%20format%20or%20any%20additional%20details%20you%27d%20like%20to%20share,%20please%20let%20me%20know.%0A%0AThank%20you,%0A[Your%20Name]%0A[Company]%0A[Contact%20Information]",
        },
    ];

    const otherContactItems = [
        { name: "Email", url: "mailto:aury@seeyoutomorrow.us" },
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
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm tracking-wide font-light hover:opacity-25">
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