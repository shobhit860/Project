// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }
  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query){
    // Write your code here to retrieve all art pieces
    return this.db;
  }
  static findOne(id) {
    return this.db.find(item=>item.id === Number(id));
    // Write your code here to retrieve a specific art piece by its id
  }

  static update(id, data){
    // Write your code here to update the details of a specific art piece
    const {title, artist, year, imageUrl} = data;
    this.db.forEach(item=>{
      if(item.id===Number(id)){
        item.title = title;
        item.artist = artist;
        item.year = year;
        item.imageUrl = imageUrl;
      }
    });
    return this.db.find(item=>item.id===Number(id));
  }

  static delete(id){
    // Write your code here to delete a specific art piece
    const index=this.db.findIndex(item=>item.id===Number(id));
    this.db.splice(index, 1);
  }
}
