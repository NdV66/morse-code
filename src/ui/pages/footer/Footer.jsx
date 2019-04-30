import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { MdLocalActivity } from 'react-icons/md';
import TEXTS from '../../../entities/consts/Texts';
import PATHS from '../../../entities/consts/Paths';
import styles from './Footer.module.scss';

const footerCssClass = `${styles.footer} pb-3 pt-3`;

const ProjectLink = (props) => <Col md='12'>
    <a href={PATHS[props.id]}>
        <MdLocalActivity />{TEXTS[props.id]}
    </a>
</Col>;

export const Footer = () => <Container fluid className={footerCssClass}>
    <Row>
        <Col>
            <h4>
                <a href={PATHS.GITHUB}>{TEXTS.GITHUB}</a>
            </h4>
        </Col>
        <Col>
            <Col md='12'>
                <h4>{TEXTS.OTHER_PROJECTS}</h4>
            </Col>
            <ProjectLink id={'BE_STAR_ONLINE'} />
            <ProjectLink id={'MY_SITE'} />
            <ProjectLink id={'DEV_NAMES_GENERATOR'} />
            <ProjectLink id={'HERBACIANKA'} />
            <ProjectLink id={'THIS_SITE_CODE'} />
        </Col>
    </Row>
</Container>;