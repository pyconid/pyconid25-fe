import { Calendar, MapPinned } from "lucide-react";
import type { FC } from "react";

export const CallForProposalSection: FC = () => (
	<section className="bg-[#F1F1F1]">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="flex flex-col items-center justify-center">
					<div className="text-blue-900 px-8 py-4 font-display text-md lg:text-3xl pt-2 pr-4 pb-2 pl-4 font-extrabold">
						Call for Proposal
					</div>
					<div className="font-display text-center text-[40px] lg:text-5xl mt-[0.4vh] font-bold font-weight-700 p-2">
						<p>
							<span className="text-[#F37F20]">Let's talk</span>{" "}
							<span className="text-black">at PyCon ID 2025</span>
						</p>
						<div className="flex gap-x-1">
							<p className="text-black">
								We are open for{" "}
								<span className="text-[#224083] lg:hidden">
									{" "}
									talks submission
								</span>
							</p>{" "}
							<div className="hidden lg:text-[#224083] lg:flex lg:flex-col lg:items-center">
								talks submission
								<img
									alt="orange line"
									src="/svg/line-3.svg"
									className="hidden lg:flex w-fit"
								/>
							</div>
						</div>
					</div>
					<div className="mt-[2vh]">
						<img
							alt="orange line"
							src="/svg/line-2.svg"
							className="w-full lg:hidden"
						/>
						<div className="flex flex-row gap-x-10 font-sans p-2">
							<div className="text-blue-900 font-bold flex flex-row gap-2 items-center">
								<Calendar />
								13-14 December 2025
							</div>
							<div className="text-blue-900 font-bold flex flex-row gap-2 items-center">
								<MapPinned />
								Jakarta, Indonesia
							</div>
						</div>
						<img
							alt="orange line"
							src="/svg/line-3.svg"
							className="w-full lg:hidden"
						/>
					</div>

					<button
						className="cursor-pointer bg-blue-900 hover:bg-blue/50 text-white px-8 py-4 rounded-xl font-display text-lg lg:text-2xl pt-2 pr-4 pb-2 pl-4 mt-[3vh] font-bold"
						type="button"
					>
						Submission Closed
					</button>

					<div className="">
						<h1 className="font-display text-3xl font-extrabold text-justify">
							Accepted Proposals are listed below:
						</h1>
						<table className="min-w-full border border-gray-300 divide-y divide-gray-300 my-6">
							<thead className="bg-gray-100">
								<tr>
									<th className="px-4 py-2 text-left font-semibold">
										Talk Type
									</th>
									<th className="px-4 py-2 text-left font-semibold">Speaker</th>
									<th className="px-4 py-2 text-left font-semibold">Title</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Achmad Mardiansyah</td>
									<td className="px-4 py-2">
										From Chats to Charts: WhatsApp Analytics with Python &
										PostgreSQL
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Alex Shershebnev</td>
									<td className="px-4 py-2">
										From $19 to CFO Attention: The Pricing Spiral of AI
										Assistants
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Anubhav Sanyal</td>
									<td className="px-4 py-2">
										Brewing Better Reports - RedCoffee and SonarQube
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Aria Suseno</td>
									<td className="px-4 py-2">
										Empowering QA with Python: A Visual Locator Library for
										Robust Test Automation
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Avira Avira</td>
									<td className="px-4 py-2">
										Python-Driven Cyber Defense at Scale: Automating Threat
										Detection, Incident Response, and Compliance in Modern
										Banking
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Bayu Indra Kusuma</td>
									<td className="px-4 py-2">
										Omakase Odoo: Effortless ERP Environment Setup in One
										Command
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Cyrus Mante</td>
									<td className="px-4 py-2">
										Building Beautiful & Interactive Terminal User Interfaces
										with Textual
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Dita Aji Pratama</td>
									<td className="px-4 py-2">
										How I create a simple Authentication and Authorization with
										Python.
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Fitra Aditya</td>
									<td className="px-4 py-2">
										Build Your Own Voice AI Chat Bot
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Hendra Kusumah</td>
									<td className="px-4 py-2">
										Build the Keyboard You Deserve Using CircuitPython
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Ilya Verbitskiy</td>
									<td className="px-4 py-2">
										Reconstructing the Past with Knowledge Graphs: Empowering
										Historians through Neo4j and GenAI
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Iman Rahman</td>
									<td className="px-4 py-2">
										Python for Medical Diagnostics: Signal Processing and ML
										with Electronic Nose Data
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Jacqueline Abyasa</td>
									<td className="px-4 py-2">
										Demystifying Medical AI: Explainable AI for Brain Tumor
										Segmentation
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Khalid Saifullah</td>
									<td className="px-4 py-2">
										From Sensor to Safety: Python Role in Ensuring Food Safety
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Kuncahyo Setyo Nugroho</td>
									<td className="px-4 py-2">
										Why GPU Matters: Accelerate Your Data Science Research in
										Python
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Mahaputra Ilham Awal</td>
									<td className="px-4 py-2">
										Automate, Integrate, Secure: Python Security Pipeline in
										Practice
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Marchel Andrian Shevchenko</td>
									<td className="px-4 py-2">
										Concurrency Aware Python Data Pipelines for Benchmarking
										Threading Multiprocessing and Asynchronous Execution in
										Large Scale Models
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Melisa Krisnawati</td>
									<td className="px-4 py-2">
										Faster Detection in Medical Imaging with Python (Blood Cell
										Detection using YOLO, CNN, IoU, and KNN)
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Muhammad Verly</td>
									<td className="px-4 py-2">
										Reducing Latency in Edge Video Streams: Implementing
										Brokerless Message Queues for Smart PPE Detection
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Nicholas Dwiarto</td>
									<td className="px-4 py-2">
										Pythonic Finance: Analyze Company Fundamentals with SEC
										EDGAR APIs
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Nizar Akbar Meilani</td>
									<td className="px-4 py-2">
										Python meets bpfilter and safeline : Low Cost HTTP Flood
										Filtering
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Pahrial M.S.</td>
									<td className="px-4 py-2">
										Contributing to OpenInfra Projects: Insights from OpenInfra
										Korea’s Contribution Camp to OpenStack Contribution Camp in
										Indonesia
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Petr Andreev</td>
									<td className="px-4 py-2">
										CPython Under Load: NoGIL, GreenThreads, AsyncIO vs. Other
										Langs: deep-dive in core and benchmarks
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Renaldy Gatan Pramana</td>
									<td className="px-4 py-2">
										MLflow 101: Deploy Your Model in Style!
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Rendy B. Junior</td>
									<td className="px-4 py-2">
										LangChain, ADK, and Beyond: Navigating the LLM Dev Framework
										Jungle
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Rexsy Bima Trima Wahyu</td>
									<td className="px-4 py-2">
										Make web development fun again through HTMX with Django
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Rishaldy Prisly</td>
									<td className="px-4 py-2">
										Flying High with Python: Taking to the Skies with Aerial
										Automation
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Roberto Hutapea</td>
									<td className="px-4 py-2">
										Cari Dalang Judol Lewat Transaksimu dengan Python
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Saksham Aggarwal</td>
									<td className="px-4 py-2">
										Evals First, Code Later: A Practical Guide to Evaluations,
										Rerankers & Caches
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Taufiq</td>
									<td className="px-4 py-2">
										No Cloud? No Problem: Turn Your Phone into a Remote Linux
										Server for Python Apps
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Tegar Imansyah</td>
									<td className="px-4 py-2">
										How to Uninstall Python on Your Operating System
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Thosan Girisona Suganda</td>
									<td className="px-4 py-2">
										1 Line that saves $1K : Incremental Aggregations with DBT &
										Python data model.
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Regular Talk</td>
									<td className="px-4 py-2">Yahya F. Al-Fatih</td>
									<td className="px-4 py-2">Python is Dead</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Abdul Arfan</td>
									<td className="px-4 py-2">
										Back to the Future: A Line-Numbered Python Interpreter with
										BASIC Flavor
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Adif Dwi Maulana</td>
									<td className="px-4 py-2">
										Simplify Web Scraping with Playwright and FastAPI Background
										Task
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Alysia Alfi</td>
									<td className="px-4 py-2">
										Thinking in Python When You Come from JavaScript
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Arya Soni</td>
									<td className="px-4 py-2">
										No More Blind Spots: Tracing and Observability in Python
										with OpenTelemetry
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Chaw Chit Su Thwe</td>
									<td className="px-4 py-2">
										What does it take to create a language of your own in
										Python?
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Jesaya Fernando Napitupulu</td>
									<td className="px-4 py-2">
										Halberd: Python-based Multi-cloud Attacking Tool
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Kayla Queenazima</td>
									<td className="px-4 py-2">
										Designing Protein with AI: How Protein Language Models Power
										Next-Gen Bioengineering
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Kevin Noelee Dieter Alden</td>
									<td className="px-4 py-2">
										Python is for Everyone: How a Non-CS Student Won 15+ Awards
										with Python’s Help
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2">Short Talk</td>
									<td className="px-4 py-2">Rafi Ramadhana</td>
									<td className="px-4 py-2">
										Analyzing Stock Using Python Based On Peter Lynch's
										Classification
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<p className="lg:hidden mt-[1vh]">
						<span className="text-[#E81919] font-bold">Proposal Deadline:</span>{" "}
						<span className="font-semibold text-[#E81919] ">
							September 14, 2025
						</span>
					</p>
					<div className="mt-[5vh] m-2 grid grid-cols-1 lg:grid-cols-3 gap-5">
						<div className="border border-[#224083] rounded-lg backdrop-blur-xl p-4 flex flex-col">
							<p className="border-b border-[#224083] font-display font-bold text-[#224083]">
								Conference Format:
							</p>
							<p className="font-sans font-normal text-black mt-2">
								We will have two talk formats for PyCon ID 2025. First is a
								30-minutes Regular Talk session where you can talk about
								library, method, or other deep topic of python. Second is a
								15-minutes Short Talk session for those who are a first timer or
								just want to talk about lighter topic about python.
							</p>
						</div>
						<div className="border border-[#E8D41C] rounded-lg backdrop-blur-xl p-4 flex flex-col">
							<p className="border-b border-[#E8D41C] font-display font-bold text-[#E8D41C]">
								Topics
							</p>
							<p className="font-sans font-normal text-black mt-2">
								You can talk about anything, as long as it involves python in
								it. We are accepting a lot of topics such as web development,
								artificial intelligence, data engineering, computer vision, dev
								ops, and even topic about cool libraries
							</p>
						</div>
						<div className="border border-[#F37F20] rounded-lg backdrop-blur-xl p-4 flex flex-col">
							<p className="border-b border-[#F37F20] font-display font-bold text-[#F37F20]">
								Your Submission:
							</p>
							<p className="font-sans font-normal text-black mt-2">
								Please submit the proposal to our PaperCall page. Submission are
								reviewed on a rolling basis so please check your submission
								regularly. We will open the submission until September 14th,
								2025.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
