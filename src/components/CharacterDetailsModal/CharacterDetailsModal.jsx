import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "../Modal";
import Avatar from "../Avatar";
import Title from "../Title";

const CharacterDetailsModal = ({
  isOpen,
  onClose,
  characterComicsList,
  characterSeriesList,
  characterStoriesList,
  characterEventsList,
  character = {},
}) => {
  const avatarUrl =
    (character.thumbnail &&
      `${character.thumbnail.path}.${character.thumbnail.extension}`) ||
    "";
  return (
    <Modal
      title="Character details"
      isOpen={isOpen}
      onClose={onClose}
      className="character-details-modal"
    >
      <Avatar
        url={avatarUrl}
        name={<Title level="5" title={character.name} />}
      />
      <Tabs>
        <TabList>
          <Tab>Comics</Tab>
          <Tab>Series</Tab>
          <Tab>Stories</Tab>
          <Tab>Events</Tab>
        </TabList>
        <TabPanel>{characterComicsList}</TabPanel>
        <TabPanel>{characterSeriesList}</TabPanel>
        <TabPanel>{characterStoriesList}</TabPanel>
        <TabPanel>{characterEventsList}</TabPanel>
      </Tabs>
    </Modal>
  );
};

export default CharacterDetailsModal;
