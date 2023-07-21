// components/ReachOut.tsx

function ReachOut() {
    return (
        <div>
            <p className="text-xs sm:text-sm tracking-wide font-light">
                I know you are doing your best.<br/>
                Please <a href="mailto:ping@parth.ski" className="underline underline-offset-4 decoration-from-font hover:opacity-25">reach out</a> if I can provide any help.
            </p>
        </div>
    );
}

export default ReachOut;