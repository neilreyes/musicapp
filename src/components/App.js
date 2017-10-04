import React, { Component } from 'react';
import Profile from './Profile';
import Tracks from './Tracks';

class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			query: '',
			artist: null,
			tracks: [],
			neil: '',
		}		
	}

	search(){
		/*let query = this.state.query;*/
		const BASE_URL = 'https://api.spotify.com/v1/search';
		let FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
		const ALBUM_URL = 'https://api.spotify.com/v1/artists';
		let accessToken = 'BQA-aZpdKGwLi-wMUJ--iVNmGmAmo41FtG6vDGOAUnns2jyKThKLqKMYNitEk3vItPbS4K1YQUCP-UhEMIyzrbUtcIF9LV4QtrkVO1TAJ6PdslzgOFsDRM47xMDU9SSB3RxOy5NC6bPoOPtaN_PjEmgAKE25VlKtejFH&refresh_token=AQCmRaDEmsyk5-nW7yJ7n_Bu0nozvcco6PHmH55Bc5C_hl1G8FSGzqwz8wHvuyGRmRbPb-nR4A96HBHDwm-PjUHnda2NaMpH65aEiLbDMRORbZnv6hf0D3lyt-hwMsVCvas';

		console.log('this.state', this.state);
		console.log('FETCH_URL', FETCH_URL );

		fetch(FETCH_URL, {
			method: 'GET',
			headers: {
			    'Authorization': 'Bearer ' + accessToken
			},
		})
		.then(response => response.json())
		.then(json=>{
			const artist = json.artists.items[0];
			this.setState({
				artist: artist
			});

			FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US`;

			fetch(FETCH_URL, {
				method: 'GET',
				headers: {
				    'Authorization': 'Bearer ' + accessToken
				},
			})
			.then(response => response.json())
			.then(json=>{
				const tracks = json.tracks;
				this.setState({tracks:tracks});
				console.log('top tracks:',json);
			});
			//console.log('artist:',artist);
		});
	}

	handleOnChange(event){
		this.setState({query: event.target.value});
	}

	handleOnKeyPress(event){
		if( event.key === 'Enter' ){
			this.search()
		}
	}

	render(){
		return(
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col col-12">
							<h1>Music Master</h1>
							<div className="form-group form-inline">
								<input
									placeholder="search an artist..."
									className="form-control"
									query={this.state.query}
									onChange={this.handleOnChange.bind(this)}
									onKeyPress={this.handleOnKeyPress.bind(this)}
								/>
								<button
									className="btn btn-primary"
									onClick={this.search.bind(this)}
								>
									Submit
								</button>
							</div>
						</div>
						<div className="Profile col col-12 col-md-8">
							{ this.state.artist !== null ? <Profile artist={this.state.artist}/> : <div></div> } 
						</div>
						<div className="Gallery col col-12 col-md-4">
							{ this.state.tracks !== null ? <Tracks tracks={this.state.tracks}/>: <div></div>}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;