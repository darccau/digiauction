pragma solidity ^0.8.3;

contract Digiauction {

  struct Digimon {
    uint nft;
    uint biggestBid;
    address biggestBidder;
  }

  bool auctionIsRunning;

  mapping (address => uint) balances;
  address [] offerers;

  mapping (uint => Digimon) digimons;

  constructor() {
    auctionIsRunning = true;
    initialBids();
  }

  function digimonOffers(uint id) public view 
  returns(uint, uint, address) {
    return(digimons[id].nft, digimons[id].biggestBid, digimons[id].biggestBidder);
  }

  function initialBids() private {
    uint base = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
    for (uint tokenId = 1; tokenId <= 256; tokenId++) {
      digimons[tokenId] = Digimon(1, base % (tokenId + 1000) + 500, msg.sender);
    }
  }

  function bid(uint id) public payable {
    require(digimons[id].biggestBid <= msg.sender.balance, "Your balance is not enougth");
    require(digimons[id].biggestBid < msg.value);

    payable(digimons[id].biggestBidder).transfer(digimons[id].biggestBid);

    digimons[id].biggestBidder = msg.sender;
    digimons[id].biggestBid = msg.value;
  }

  function contractBalance() public returns(uint) {
    return address(this).balance;
  }
}

