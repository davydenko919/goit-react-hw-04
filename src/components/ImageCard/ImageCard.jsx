export default function ImageCard({smallUrl,openModal,LargeUrl,alt}) {
    return (
      <div>
      <img src={smallUrl} alt="" onClick={()=>openModal(LargeUrl,alt)}/>
    </div>
    );
  }