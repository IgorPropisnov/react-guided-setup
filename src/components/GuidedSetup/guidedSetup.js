import React from 'react'
import styles from './guidedSetup.module.scss';

class GuidedSetup extends React.Component {

    state = {
        step: 1,
        maxStep: 5,
        minStep: 1
    }

    nextStep = () => {
        if (this.state.step < this.state.maxStep) {
            this.setState(prevState => {
                return { step: prevState.step + 1 }
            })
        }
    }

    prevStep = () => {
        if (this.state.step > this.state.minStep) {
            this.setState(prevState => {
                return { step: prevState.step - 1 }
            })
        }
    }

    render() {
        return (
            <div className={styles.wrapper} >
                <div className={styles.stepWrapper}>
                    {
                        this.state.step && (
                            <>
                                {this.state.step === 1 && (<div className={styles.step}>Step 1</div>)}
                                {this.state.step === 2 && (<div className={styles.step}>Step 2</div>)}
                                {this.state.step === 3 && (<div className={styles.step}>Step 3</div>)}
                                {this.state.step === 4 && (<div className={styles.step}>Step 4</div>)}
                                {this.state.step === 5 && (<div className={styles.step}>Step 5</div>)}
                            </>
                        )
                    }

                </div>
                <button disabled={this.state.step === this.state.minStep} onClick={this.prevStep} className={styles.button}>Prev Step</button>
                <button disabled={this.state.step === this.state.maxStep} onClick={this.nextStep} className={styles.button}>Next Step</button>
                <div className={styles.stepIndicator}>
                    <span className={ this.state.step === 1 ? styles.active : '' }>•</span>
                    <span className={ this.state.step === 2 ? styles.active : '' }>•</span>
                    <span className={ this.state.step === 3 ? styles.active : '' }>•</span>
                    <span className={ this.state.step === 4 ? styles.active : '' }>•</span>
                    <span className={ this.state.step === 5 ? styles.active : '' }>•</span>
                </div>
            </div>
        )
    }
}

export default GuidedSetup