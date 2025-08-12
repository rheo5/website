export default function About(){
  return (
    <>
      <main className="prose prose-lg flex flex-col items-center max-w-2xl mx-auto px-12 py-4">
        <div className="w-full text-left flex flex-col gap-6">
          <h1 className="font-bold text-xl">currently...</h1>
          <p className="text-base font-normal">
            <span className="font-semibold italic">reading</span> <br />
            - <a href="https://www.goodreads.com/book/show/58484901-how-to-be-perfect?ref=nav_sb_ss_1_17" target="_blank">How to be Perfect - Michael Schur</a> <br />
            - <a href="https://substack.com/@yoxjin/reads" target="_blank">substack</a>
          </p>

          <p className="text-base font-normal">
            <span className="font-semibold italic">making</span>  <br />
            - cute pottery pieces ˚౨ৎ˚ 
            <div className="mt-2 flex flex-wrap gap-4">
              {["img1.png", "img2.png", "img3.png", "img4.png"].map((img, idx) => (
                <img
                  key={idx}
                  src={`/pottery/${img}`}
                  alt={`Pottery piece ${idx + 1}`}
                  className="w-full max-w-[120px] rounded shadow"
                />
              ))}
            </div>
            - this website
          </p>

          <p className="text-base font-normal">
            <span className="font-semibold italic">listening</span> <br />
            <div className="mt-2 flex flex-wrap gap-4">
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/6OgXWgGEDRFdeWY9cwwizT?utm_source=generator" width="45%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/66IfNUx4NkU4cNzbOhLNC1?utm_source=generator" width="45%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </p>
        </div>
      </main>
    </>
  )
}
