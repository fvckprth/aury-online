import Image from 'next/image';

function Signature() {
    return (
      <div className="h-12 relative">
        <Image 
          src="/images/parth.ski-signature.svg" 
          alt="Parth's Signature" 
          layout="fill" 
          objectFit="contain"
        />
      </div>
    );
}

export default Signature;
