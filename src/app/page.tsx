import Link from "next/link";

const mockUrls = [
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8Mqkws16yhcTbDzyw9AGNgsQnlut2JOfjc1o4Ep0I5",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8MqkwspwA03DFLoAiHxjG9Udzk6S4esr1NEbLQD3Bq",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8MqkwspTl1jPLoAiHxjG9Udzk6S4esr1NEbLQD3Bq7",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8MqkwsKqDtBLF59eaoyn6ZPF3ukUhDr2sMitdlxp8z",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8MqkwsS38Bxyr4YMG8dHtlafWJT3vQcZ6EURoNgFyS",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8MqkwsvynfoiPALPUCMjF4y9RbQIht7vxzBo6kV5pr",
	"https://0c1kot11jt.ufs.sh/f/B3D9VZ8Mqkwshz1qG0N9HtR4KUJMQ5CBga06Xhqz2rmkIcpe"
];

const mockImages = mockUrls.map((url, index) => ({
	id: index+1,
	url,
}));

export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap gap-4">
				{mockImages.map((image) => (
					<div key={image.id} className="w-48">
						<img src={image.url} />
					</div>
				))}
			</div>
		</main>
	);
}
