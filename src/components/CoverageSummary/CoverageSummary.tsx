import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import styles from './CoverageSummary.module.css';

interface CoverageSummaryProps {
    fileCoverage?: number;
    methodCoverage?: number;
    linesOfCode?: number;
}

interface MetricCircleProps {
    value: number;
    color: string;
    label: string;
}

const MetricCircle: React.FC<MetricCircleProps> = ({ value, color, label }) => (
    <div className={styles.metricContainer}>
        <Box position="relative">
            <CircularProgress
                variant="determinate"
                value={100}
                size={80}
                thickness={4}
                sx={{ color: '#2d2d3b' }}
            />
            <CircularProgress
                variant="determinate"
                value={value}
                size={80}
                thickness={4}
                sx={{
                    color: color,
                    position: 'absolute',
                    left: 0,
                }}
            />
            <Typography className={styles.circleLabel}>{`${value}%`}</Typography>
        </Box>
        <Typography className={styles.metricLabel}>{label}</Typography>
    </div>
);

const CoverageSummary: React.FC<CoverageSummaryProps> = ({
                                                             fileCoverage = 10,
                                                             methodCoverage = 10,
                                                             linesOfCode = 20,
                                                         }) => {
    return (
        <div className={styles.container}>
            <MetricCircle value={fileCoverage} color="#4caf50" label="File coverage" />
            <MetricCircle value={methodCoverage} color="#f44336" label="Method coverage" />
            <div className={styles.linesContainer}>
                <div className={styles.lines}>
                    <span className={styles.line} />
                    <span className={styles.line} />
                    <span className={styles.line} />
                </div>
                <Typography className={styles.linesCount}>{linesOfCode}</Typography>
                <Typography className={styles.metricLabel}>Lines of code</Typography>
            </div>
        </div>
    );
};

export default CoverageSummary;