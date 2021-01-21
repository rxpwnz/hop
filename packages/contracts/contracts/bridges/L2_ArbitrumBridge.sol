// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import "../interfaces/arbitrum/messengers/IGlobalInbox.sol";
import "./L2_Bridge.sol";

contract L2_ArbitrumBridge is L2_Bridge {
    IGlobalInbox public messenger;

    constructor (
        IGlobalInbox _messenger,
        address _l1Governance,
        IERC20 _canonicalToken,
        address _l1BridgeAddress,
        uint256[] memory _supportedChainIds,
        address _bonder
    )
        public
        L2_Bridge(_l1Governance, _canonicalToken, _l1BridgeAddress, _supportedChainIds, _bonder)
    {
        messenger = _messenger;
    }

    function _sendCrossDomainMessage(bytes memory _message) internal override {
        // TODO: Add the Arbitrum-specific messaging
    }

    function _verifySender(address _expectedSender) internal override {
        // ToDo: verify sender with Arbitrum L2 messenger
        // sender should be l1BridgeAddress
    }
}
