import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useMetaMask } from "metamask-react";

import hill from "../assets/Crypto/LandIcon.png";
import { raidData } from "../utils/data";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

function useOutsideAlerter(ref, setOpenModal) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function Attack(props) {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenModal);

  const connectwalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  // }
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  // custome function
  const raidHandler = () => {
    status === "connected" || defaultAccount
      ? setOpenModal(!openModal)
      : connectwalletHandler();
  };

  return (
    <div className="raidBackground">
      <Header />
      {/* raid section  */}
      <div className="container-custome raid">
        <div className="row header">
          <div className="col-md-6">
            <p>
              <span className="clr-rr">Attacking | </span> Your Attacking Stats
            </p>
          </div>
          <div className="col-md-6">
            <p className="clr-g">Raid AI</p>
          </div>
        </div>
        {raidData.map((item, index) => (
          <div className="row">
            <div className="col-md-6">
              <div
                className="d-flex left"
                style={{ border: `solid 3px ${item.color} ` }}
              >
                <div
                  style={{
                    borderRight: `solid 3px ${item.color} `,
                    boxShadow: `2px 2px 61px -7px ${item.color} inset`,
                  }}
                  className="img"
                >
                  <img src={item?.icon} alt="hill" />
                </div>
                <p>{item.name}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right  d-flex">
                <span>Level 1</span>
                <p>Rew : 15,000 $Leaf</p>
              </div>
            </div>
          </div>
        ))}
        {defaultAccount && (
          <div className="clr-w">
            Connected account {defaultAccount} on chain ID {userBalance}
          </div>
        )}
        <div className="details">
          <h2>Raid Player</h2>
          <div className="primarybtn" onClick={() => raidHandler()}>
            Raid
          </div>
          <p className="reward">Reward</p>
          <p className="balance">50,000,000 $Leaf</p>
          <h5 className="increase">Increased $LEAF Multiplier</h5>
        </div>
      </div>

      {/* raid section  */}
      {/* blur modal sectioin  */}

      {openModal && (
        <div className="modal-section">
          <div className="content">
            <p className="title">Raid Player </p>
            <div ref={wrapperRef} className="content-box">
              <p className="title-success">Raid Successful ! </p>
              <Link className="Link" to="/">
                <p className="successbtn">Go Back </p>
              </Link>
            </div>
            <p className="title-bottom">Increased $LEAF Multiplier </p>
          </div>
        </div>
      )}

      {/* blur modal sectioin  */}
    </div>
  );
}

export default Attack;
