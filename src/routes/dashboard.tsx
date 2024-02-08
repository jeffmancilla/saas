export default function Dashboard() {
	return (
		<>
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>Documents</a>
					</li>
					<li>Add Document</li>
				</ul>
			</div>
			<div className="divider">Test</div>

			<h1 className="text-4xl font-bold">Heading 1</h1>
			<div className="flex flex-wrap gap-4 justify-center">
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Card title!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>{" "}
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Card title!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-md">
					<div className="card-body">
						<h2 className="card-title">Card title!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>

			<div className="divider">Test</div>
			<div className="flex flex-col w-full lg:flex-row">
				<div className="flex gap-2 flex-grow card bg-base-300 rounded-box p-10">
					<div className="font-bold">Details</div>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">What is your name?</span>
							<span className="label-text-alt">Top Right label</span>
						</div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">
								Pick the best fantasy franchise
							</span>
							<span className="label-text-alt">Alt label</span>
						</div>
						<select className="select select-bordered">
							<option disabled selected>
								Pick one
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
							<option>Lord of the Rings</option>
							<option>Planet of the Apes</option>
							<option>Star Trek</option>
						</select>
					</label>
					<label className="form-control w-full max-w-xs">
						<div className="label">
							<span className="label-text">Pick a file</span>
							<span className="label-text-alt">Alt label</span>
						</div>
						<input
							type="file"
							className="file-input file-input-bordered w-full max-w-xs"
						/>
					</label>
					<dialog id="delete_modal" className="modal">
						<div className="modal-box">
							<form method="dialog">
								{/* if there is a button in form, it will close the modal */}
								<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
									✕
								</button>
							</form>
							<h3 className="font-bold text-lg">Hello!</h3>
							<p className="py-4">
								Press ESC key or click on ✕ button to close
							</p>
						</div>
					</dialog>
					<div className="flex gap-2 mt-10">
						<button className="btn btn-outline">Button</button>
						<button
							className="btn btn-error"
                            // @ts-expect-error delete_modal is appropriately assigned as id attribute to respective HTMLDialogElement
							onClick={() => delete_modal.showModal()}
						>
							Delete
						</button>
					</div>
				</div>
				<div className="divider lg:divider-horizontal" />
				<div className="flex gap-2 flex-grow card bg-base-300 rounded-box p-10">
					<div className="font-bold">Messages</div>
					<div className="chat chat-start">
						<div className="chat-header">
							Obi-Wan Kenobi
							<time className="text-xs opacity-50">2 hours ago</time>
						</div>
						<div className="chat-bubble">You were the Chosen One!</div>
						<div className="chat-footer opacity-50">Seen</div>
					</div>
					<div className="chat chat-start">
						<div className="chat-header">
							Obi-Wan Kenobi
							<time className="text-xs opacity-50">2 hour ago</time>
						</div>
						<div className="chat-bubble">I loved you.</div>
						<div className="chat-footer opacity-50">Delivered</div>
					</div>
				</div>
			</div>
		</>
	)
}
